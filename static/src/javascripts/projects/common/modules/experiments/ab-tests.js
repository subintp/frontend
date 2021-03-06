// @flow
import { commercialPrebidSafeframe } from 'common/modules/experiments/tests/commercial-prebid-safeframe.js';
import { askFourEarning } from 'common/modules/experiments/tests/contributions-epic-ask-four-earning';
import { acquisitionsEpicAlwaysAskIfTagged } from 'common/modules/experiments/tests/acquisitions-epic-always-ask-if-tagged';
import { adblockTest } from 'common/modules/experiments/tests/adblock-ask';
import { articlesViewedBanner } from 'common/modules/experiments/tests/contribs-banner-articles-viewed';
import { xaxisAdapterTest } from 'common/modules/experiments/tests/commercial-xaxis-adapter';
import { appnexusUSAdapter } from 'common/modules/experiments/tests/commercial-appnexus-us-adapter';
import { pangaeaAdapterTest } from 'common/modules/experiments/tests/commercial-pangaea-adapter';
import { amazonA9Test } from 'common/modules/experiments/tests/amazon-a9';
import { subscriptionsBannerNewYearCopyTest } from 'common/modules/experiments/tests/subscriptions-banner-new-year-copy';
import { remoteRenderEpic } from 'common/modules/experiments/tests/remote-render-epic';
import { signInGate } from 'common/modules/experiments/tests/sign-in-gate';
import { contributionsEpicPrecontributionReminderRoundOne } from 'common/modules/experiments/tests/contributions-epic-precontribution-reminder-round-one';
import { contributionsEuropeMoment } from 'common/modules/experiments/tests/contribs-banner-europe-moment';
import { commercialGptLazyLoad } from 'common/modules/experiments/tests/commercial-gpt-lazy-load';

export const concurrentTests: $ReadOnlyArray<ABTest> = [
    commercialPrebidSafeframe,
    adblockTest,
    amazonA9Test,
    xaxisAdapterTest,
    appnexusUSAdapter,
    pangaeaAdapterTest,
    subscriptionsBannerNewYearCopyTest,
    signInGate,
    commercialGptLazyLoad,
];

export const priorityEpicTest: EpicABTest = remoteRenderEpic;

export const epicTests: $ReadOnlyArray<EpicABTest> = [
    contributionsEpicPrecontributionReminderRoundOne,
    askFourEarning,
    acquisitionsEpicAlwaysAskIfTagged,
];

export const engagementBannerTests: $ReadOnlyArray<AcquisitionsABTest> = [
    contributionsEuropeMoment,
    articlesViewedBanner,
];
