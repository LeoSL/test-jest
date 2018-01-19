import Tracker from './tracker';

describe('SuccessPlanTracker', () => {
  describe('track', () => {
    const trackingDataComplete = {
      accountId: 1,
      accountName: 'Xunrassic Park',
      userId: 123,
      userEmail: 'xundossaur@dev.org',
      successPlanId: 54,
      successPlanName: 'Xunda',
      planOrigin: 'Manual',
    };

    const trackingDataIncomplete = {
      accountId: 1,
      accountName: 'Xunrassic Park',
      userId: 123,
      userEmail: 'xundossaur@dev.org',
    };

    describe('renders properly with complete tracking data', () => {
      const successPlanTracker = new Tracker(trackingDataComplete);

      trackingDataComplete.sourceUrl = 'about:blank';
      expect(successPlanTracker.mainProperties).toEqual(trackingDataComplete);
    });
  });
});
