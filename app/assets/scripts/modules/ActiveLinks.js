import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class ActiveLinks {
  constructor() {
    this.headerLinks = $('.menu-list a');
    this.pageSection = $('.page-section');
    this.createWayPoints();
  }

  createWayPoints() {
    let that = this;
    this.pageSection.each(function () {
      let currentPageSection = this;
      new Waypoint({
        element: currentPageSection,
        handler: function (direction) {
          if (direction == 'down') {
            let matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
            that.headerLinks.removeClass('is-active');
            $(matchingHeaderLink).addClass('is-active');
          }
        },
        offset: '10%',
      });
      new Waypoint({
        element: currentPageSection,
        handler: function (direction) {
          if (direction == 'up') {
            let matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
            that.headerLinks.removeClass('is-active');
            $(matchingHeaderLink).addClass('is-active');
          }
        },
        offset: '-50%',
      });
    });
  }
}

export default ActiveLinks;
