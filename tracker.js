class Tracker {
  constructor(trackingData) {
    this.mainProperties = {
      accountId: trackingData.accountId,
      accountName: trackingData.accountName,
      userId: trackingData.userId,
      userEmail: trackingData.userEmail,
      successPlanId: trackingData.successPlanId || 'N/A',
      successPlanName: trackingData.successPlanName || 'N/A',
      planOrigin: trackingData.planOrigin || 'N/A',
      sourceUrl: trackingData.sourceUrl || window.location.href,
    };
  }

  mergeProps(properties) { return { ...this.mainProperties, ...properties }; }
}

module.exports = Tracker;
