angular.module('travelBlogApp', [])
.controller('MainController', function($scope, $window) {
  $scope.scrolled = false;
  $scope.menuActive = false;

  angular.element($window).on('scroll', function() {
    $scope.scrolled = $window.pageYOffset > 50;
    $scope.$apply();
  });

  $scope.toggleMenu = function() {
    $scope.menuActive = !$scope.menuActive;
  };

  $scope.smoothScroll = function(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    $scope.menuActive = false;
  };

  $scope.featuredStories = [{
    title: "A Week in Bali",
    excerpt: "Discover the magic of Bali's lush landscapes, ancient temples, and vibrant culture.",
    image: "images/blog1.jpg"
  },
    {
      title: "Exploring the Scottish Highlands",
      excerpt: "Uncover the rugged beauty and rich history of Scotland's breathtaking highlands.",
      image: "images/blog2.jpg"
    },
    {
      title: "Tokyo: A City of Contrasts",
      excerpt: "Experience the unique blend of tradition and technology in Japan's bustling capital.",
      image: "images/blog3.jpg"
    }];

  $scope.photos = [{
    url: "images/p1.jpg",
    title: "Mountain Vista"
  },
    {
      url: "images/p2.jpg",
      title: "Tropical Paradise"
    },
    {
      url: "images/p3.jpg",
      title: "Urban Adventure"
    },
    {
      url: "images/p4.jpg",
      title: "Hidden Waterfall"
    },
    {
      url: "images/p5.jpg",
      title: "Local Cuisine"
    },
    {
      url: "images/p6.jpg",
      title: "Cultural Exchange"
    }];

  $scope.itineraries = [{
    destination: "Greek Island Hopping",
    description: "Explore the stunning Cyclades islands, including Santorini, Mykonos, and Naxos.",
    duration: "10 days",
    bestTime: "May to September",
    image: "images/i1.jpg"
  },
    {
      destination: "Costa Rica Adventure",
      description: "Experience the diverse ecosystems and wildlife of Costa Rica, from rainforests to beaches.",
      duration: "14 days",
      bestTime: "December to April",
      image: "images/i2.jpg"
    },
    {
      destination: "Iceland Ring Road Trip",
      description: "Drive around Iceland's Ring Road to see waterfalls, glaciers, and volcanic landscapes.",
      duration: "7-10 days",
      bestTime: "June to August",
      image: "images/i3.jpg"
    }];

  $scope.email = '';
  $scope.subscribeNewsletter = function() {
    if ($scope.email) {
      alert('Thank you for subscribing with: ' + $scope.email);
      $scope.email = '';
    } else {
      alert('Please enter a valid email address.');
    }
  };
});

// Vanilla JS
document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100
  });

  // Parallax effect for hero section
  const hero = document.querySelector('.hero');
  window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
  });

  // Testimonial slider
  const testimonials = document.querySelectorAll('.testimonial-item');
  let currentTestimonial = 0;

  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.style.opacity = i === index ? '1': '0';
      testimonial.style.transform = i === index ? 'scale(1)': 'scale(0.9)';
    });
  }

  function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  }

  showTestimonial(currentTestimonial);
  setInterval(nextTestimonial, 5000);

  // Smooth scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Animate elements on scroll
  function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-fade-in-up, .animate-scale-in, .animate-slide-in-left');
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      if (elementTop < window.innerHeight && elementBottom > 0) {
        element.classList.add('aos-animate');
      }
    });
  }

  window.addEventListener('scroll',
    animateOnScroll);
  animateOnScroll();
});