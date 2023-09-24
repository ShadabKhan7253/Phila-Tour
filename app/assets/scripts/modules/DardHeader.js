import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class DardHeader {
  constructor() {
    this, (siteHeader = $('.header'));
    this.headerTriggeringEle = $('.large-hero__title');
    this.headerLogo = $('.header__logo');
    this.createWayPoints();
  }

  createWayPoints() {
    let that = this;
    new Waypoint({
      element: this.headerTriggeringEle[0],
      handler: function (diretion) {
        if (direction == 'down') {
          that.siteHeader.addClass('header__dark');
          that.headerLogo.addClass('header__logo-samll');
        } else {
          that.siteHeader.removeClass('header__dark');
          that.headerLogo.removeClass('header__logo-samll');
        }
      },
      offset: '5%',
    });
  }
}

export default DardHeader;
