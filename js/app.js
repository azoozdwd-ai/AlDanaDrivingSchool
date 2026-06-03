(function () {
  'use strict';

  var translations = {
    ar: {
      'nav.logo': '\u0627\u0644\u062F\u0627\u0646\u0629',
      'nav.home': '\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629',
      'nav.about': '\u0645\u0646 \u0646\u062D\u0646',
      'nav.services': '\u062E\u062F\u0645\u0627\u062A\u0646\u0627',
      'nav.areas': '\u0627\u0644\u0645\u0646\u0627\u0637\u0642',
      'nav.faq': '\u0627\u0644\u0623\u0633\u0626\u0644\u0629',
      'nav.contact': '\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627',
      'nav.book': '\u0627\u062D\u062C\u0632 \u0627\u0644\u0622\u0646',
      'nav.menu_toggle': '\u0641\u062A\u062D \u0627\u0644\u0642\u0627\u0626\u0645\u0629',
      'nav.lang_toggle': 'English',
      'hero.badge': '\u0646\u0642\u0628\u0644 \u0627\u0644\u062D\u062C\u0648\u0632\u0627\u062A \u0627\u0644\u0622\u0646',
      'hero.title_gold': '\u0627\u0644\u062F\u0627\u0646\u0629',
      'hero.title_rest': '\u0644\u062A\u0639\u0644\u064A\u0645 \u0627\u0644\u0642\u064A\u0627\u062F\u0629',
      'hero.desc1': '\u0623\u0641\u0636\u0644 \u0634\u0631\u0643\u0629 \u062A\u0639\u0644\u064A\u0645 \u0642\u064A\u0627\u062F\u0629 \u0641\u064A \u0627\u0644\u0643\u0648\u064A\u062A',
      'hero.desc2': '\u0645\u062F\u0631\u0628\u064A\u0646 \u0645\u062D\u062A\u0631\u0641\u064A\u0646 - \u0633\u064A\u0627\u0631\u0627\u062A \u062D\u062F\u064A\u062B\u0629 - \u062C\u0645\u064A\u0639 \u0645\u0646\u0627\u0637\u0642 \u0627\u0644\u0643\u0648\u064A\u062A',
      'hero.call': '\u0627\u062A\u0635\u0644: 96566606979',
      'hero.whatsapp': '\u0648\u0627\u062A\u0633\u0627\u0628',
      'hero.stat1': '\u0633\u0646\u0648\u0627\u062A \u062E\u0628\u0631\u0629',
      'hero.stat2': '\u0645\u0646\u0627\u0637\u0642 \u0627\u0644\u0643\u0648\u064A\u062A',
      'hero.stat3': '\u0645\u062F\u0631\u0628',
      'hero.stat4': '\u0645\u062A\u062F\u0631\u0628 \u0633\u0646\u0648\u064A\u0627\u064B',
      'hero.alt.slide1': '\u0635\u0648\u0631\u0629 \u062E\u0644\u0641\u064A\u0629 \u0644\u062A\u0639\u0644\u064A\u0645 \u0627\u0644\u0642\u064A\u0627\u062F\u0629',
      'hero.alt.slide2': '\u0635\u0648\u0631\u0629 \u0633\u064A\u0627\u0631\u0629 \u062A\u0639\u0644\u064A\u0645 \u0627\u0644\u0642\u064A\u0627\u062F\u0629',
      'hero.alt.slide3': '\u0635\u0648\u0631\u0629 \u0645\u062F\u0631\u0628 \u0642\u064A\u0627\u062F\u0629 \u0645\u0639 \u0645\u062A\u062F\u0631\u0628',
      'hero.alt.slide4': '\u0635\u0648\u0631\u0629 \u0633\u064A\u0627\u0631\u0629 \u062D\u062F\u064A\u062B\u0629 \u0644\u0644\u062A\u062F\u0631\u064A\u0628',
      'hero.alt.slide5': '\u0635\u0648\u0631\u0629 \u0642\u064A\u0627\u062F\u0629 \u0627\u0644\u0633\u064A\u0627\u0631\u0629 \u0641\u064A \u0627\u0644\u0643\u0648\u064A\u062A',
      'hero.alt.phone': '\u0623\u064A\u0642\u0648\u0646\u0629 \u0627\u062A\u0635\u0627\u0644',
      'hero.alt.whatsapp': '\u0623\u064A\u0642\u0648\u0646\u0629 \u0648\u0627\u062A\u0633\u0627\u0628',
      'about.subtitle': '\u062A\u0639\u0631\u0641 \u0639\u0644\u064A\u0646\u0627',
      'about.title': '\u0645\u0646 \u0646\u062D\u0646',
      'about.desc': '\u0627\u0644\u062F\u0627\u0646\u0629 \u0644\u062A\u0639\u0644\u064A\u0645 \u0627\u0644\u0642\u064A\u0627\u062F\u0629 \u0648\u0627\u062D\u062F\u0629 \u0645\u0646 \u0623\u0628\u0631\u0632 \u0634\u0631\u0643\u0627\u062A \u062A\u0639\u0644\u064A\u0645 \u0627\u0644\u0642\u064A\u0627\u062F\u0629 \u0641\u064A \u0627\u0644\u0643\u0648\u064A\u062A\u060C \u062A\u0642\u062F\u0645 \u062E\u062F\u0645\u0627\u062A \u062A\u0639\u0644\u064A\u0645 \u0627\u0644\u0633\u064A\u0627\u0642\u0629 \u0628\u0623\u0639\u0644\u0649 \u0645\u0639\u0627\u064A\u064A\u0631 \u0627\u0644\u062C\u0648\u062F\u0629 \u0648\u0627\u0644\u0633\u0644\u0627\u0645\u0629 \u0645\u0639 \u0641\u0631\u064A\u0642 \u0639\u0645\u0644 \u0645\u062A\u0645\u064A\u0632 \u0645\u0646 \u0627\u0644\u0645\u062F\u0631\u0628\u064A\u0646 \u0648\u0627\u0644\u0645\u062F\u0631\u0628\u0627\u062A \u0627\u0644\u0639\u0631\u0628 \u0648\u0627\u0644\u0648\u0627\u0641\u062F\u064A\u0646 \u0630\u0648\u064A \u0627\u0644\u062E\u0628\u0631\u0629 \u0627\u0644\u0637\u0648\u064A\u0644\u0629\u002E',
      'about.highlight': '\u0646\u062D\u0646 \u0646\u0647\u062A\u0645 \u0628\u0633\u0644\u0627\u0645\u062A\u0643 \u0639\u0644\u0649 \u0627\u0644\u0637\u0631\u064A\u0642',
      'about.desc2': '\u0641\u064A \u0627\u0644\u062F\u0627\u0646\u0629 \u0644\u062A\u0639\u0644\u064A\u0645 \u0627\u0644\u0642\u064A\u0627\u062F\u0629\u060C \u0646\u0624\u0645\u0646 \u0628\u0623\u0646 \u062A\u0639\u0644\u064A\u0645 \u0627\u0644\u0642\u064A\u0627\u062F\u0629 \u0627\u0644\u0635\u062D\u064A\u062D \u0647\u0648 \u0623\u0633\u0627\u0633 \u0627\u0644\u0633\u0644\u0627\u0645\u0629 \u0639\u0644\u0649 \u0627\u0644\u0637\u0631\u064A\u0642\u060C \u0644\u0630\u0644\u0643 \u0646\u062D\u0631\u0635 \u0639\u0644\u0649 \u062A\u0642\u062F\u064A\u0645 \u062A\u062F\u0631\u064A\u0628 \u0634\u0627\u0645\u0644 \u064A\u0634\u0645\u0644 \u0627\u0644\u062C\u0627\u0646\u0628 \u0627\u0644\u0646\u0638\u0631\u064A \u0648\u0627\u0644\u0639\u0645\u0644\u064A \u0645\u0639 \u0645\u062F\u0631\u0628\u064A\u0646 \u0645\u062D\u062A\u0631\u0641\u064A\u0646\u002E',
      'about.feature1': '\u0645\u062F\u0631\u0628\u064A\u0646 \u0648\u0645\u062F\u0631\u0628\u0627\u062A \u0639\u0631\u0628 \u0630\u0648\u064A \u062E\u0628\u0631\u0629 \u0639\u0627\u0644\u064A\u0629',
      'about.feature2': '\u0645\u062F\u0631\u0628\u064A\u0646 \u0647\u0646\u0648\u062F \u0645\u062D\u062A\u0631\u0641\u064A\u0646',
      'about.feature3': '\u0633\u064A\u0627\u0631\u0627\u062A \u062D\u062F\u064A\u062B\u0629 \u0648\u0645\u062C\u0647\u0632\u0629',
      'about.feature4': '\u062A\u062F\u0631\u064A\u0628 \u0646\u0638\u0631\u064A \u0648\u0639\u0645\u0644\u064A \u0634\u0627\u0645\u0644',
      'about.feature5': '\u0645\u062F\u0631\u0628\u0627\u062A \u0644\u062A\u0639\u0644\u064A\u0645 \u0627\u0644\u0642\u064A\u0627\u062F\u0629 \u0644\u0644\u0646\u0633\u0627\u0621 \u0641\u064A \u0627\u0644\u0643\u0648\u064A\u062A',
      'about.feature6': '\u0623\u0633\u0639\u0627\u0631 \u062A\u0646\u0627\u0641\u0633\u064A\u0629 \u0648\u0639\u0631\u0648\u0636 \u0645\u0645\u064A\u0632\u0629',
      'about.card1_title': '\u0633\u064A\u0627\u0631\u0627\u062A \u062D\u062F\u064A\u062B\u0629',
      'about.card1_desc': '\u0633\u064A\u0627\u0631\u0627\u062A \u062D\u062F\u064A\u062B\u0629 \u0648\u0645\u062C\u0647\u0632\u0629 \u0628\u0627\u0644\u0643\u0627\u0645\u0644 \u0644\u0636\u0645\u0627\u0646 \u062A\u062C\u0631\u0628\u0629 \u062A\u0639\u0644\u0645 \u0645\u0645\u062A\u0627\u0632\u0629',
      'about.card2_title': '\u0645\u0648\u0627\u0639\u064A\u062F \u0645\u0631\u0646\u0629',
      'about.card2_desc': '\u0646\u0648\u0641\u0631 \u0645\u0648\u0627\u0639\u064A\u062F \u0645\u0631\u0646\u0629 \u062A\u0646\u0627\u0633\u0628 \u062C\u062F\u0648\u0644\u0643 \u0627\u0644\u064A\u0648\u0645\u064A \u0637\u0648\u0627\u0644 \u0627\u0644\u0623\u0633\u0628\u0648\u0639',
      'about.card3_title': '\u062A\u063A\u0637\u064A\u0629 \u0634\u0627\u0645\u0644\u0629',
      'about.card3_desc': '\u0646\u063A\u0637\u064A \u062C\u0645\u064A\u0639 \u0645\u0646\u0627\u0637\u0642 \u0627\u0644\u0643\u0648\u064A\u062A \u0628\u062E\u062F\u0645\u0629 \u0627\u062D\u062A\u0631\u0627\u0641\u064A\u0629',
      'about.card4_title': '\u0641\u0631\u064A\u0642 \u0639\u0645\u0644 \u0645\u0645\u062A\u0627\u0632',
      'about.card4_desc': '\u0645\u062F\u0631\u0628\u064A\u0646 \u0645\u062D\u062A\u0631\u0641\u064A\u0646 \u0628\u062E\u0628\u0631\u0629 \u0639\u0627\u0644\u064A\u0629 \u0641\u064A \u062A\u0639\u0644\u064A\u0645 \u0627\u0644\u0642\u064A\u0627\u062F\u0629',
      'about.exp': '\u0633\u0646\u0648\u0627\u062A \u062E\u0628\u0631\u0629',
      'about.alt': '\u0645\u062F\u0631\u0628 \u0642\u064A\u0627\u062F\u0629 \u0645\u062D\u062A\u0631\u0641',
      'services.subtitle': '\u0645\u0627 \u0646\u0642\u062F\u0645\u0647',
      'services.title': '\u062E\u062F\u0645\u0627\u062A\u0646\u0627',
      'services.desc': '\u0646\u0642\u062F\u0645 \u0645\u062C\u0645\u0648\u0639\u0629 \u0634\u0627\u0645\u0644\u0629 \u0645\u0646 \u062E\u062F\u0645\u0627\u062A \u062A\u0639\u0644\u064A\u0645 \u0627\u0644\u0642\u064A\u0627\u062F\u0629 \u0644\u062A\u0644\u0628\u064A\u0629 \u0627\u062D\u062A\u064A\u0627\u062C\u0627\u062A \u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u062A\u062F\u0631\u0628\u064A\u0646',
      'services.card1_title': '\u062A\u062F\u0631\u064A\u0628 \u0646\u0638\u0631\u064A',
      'services.card1_desc': '\u062F\u0631\u0648\u0633 \u0646\u0638\u0631\u064A\u0629 \u0634\u0627\u0645\u0644\u0629 \u062A\u0634\u0645\u0644 \u0642\u0648\u0627\u0646\u064A\u0646 \u0627\u0644\u0645\u0631\u0648\u0631 \u0648\u0627\u0644\u0625\u0634\u0627\u0631\u0627\u062A \u0648\u0627\u0644\u0639\u0644\u0627\u0645\u0627\u062A \u0627\u0644\u0645\u0631\u0648\u0631\u064A\u0629 \u0627\u0644\u0643\u0648\u064A\u062A\u064A\u0629 \u0644\u0636\u0645\u0627\u0646 \u0646\u062C\u0627\u062D\u0643 \u0641\u064A \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u0646\u0638\u0631\u064A',
      'services.card2_title': '\u062A\u062F\u0631\u064A\u0628 \u0639\u0645\u0644\u064A - \u062C\u064A\u0628',
      'services.card2_desc': '\u062A\u062F\u0631\u064A\u0628 \u0639\u0645\u0644\u064A \u0639\u0644\u0649 \u0642\u064A\u0627\u062F\u0629 \u0633\u064A\u0627\u0631\u0627\u062A \u0627\u0644\u062C\u064A\u0628 \u0627\u0644\u062D\u062F\u064A\u062B\u0629 \u0645\u0639 \u0645\u062F\u0631\u0628\u064A\u0646 \u0645\u062D\u062A\u0631\u0641\u064A\u0646 \u0641\u064A \u062C\u0645\u064A\u0639 \u0623\u0646\u062D\u0627\u0621 \u0627\u0644\u0643\u0648\u064A\u062A',
      'services.card3_title': '\u062A\u062F\u0631\u064A\u0628 \u0639\u0645\u0644\u064A - \u0635\u0627\u0644\u0648\u0646',
      'services.card3_desc': '\u062A\u062F\u0631\u064A\u0628 \u0639\u0645\u0644\u064A \u0639\u0644\u0649 \u0642\u064A\u0627\u062F\u0629 \u0633\u064A\u0627\u0631\u0627\u062A \u0627\u0644\u0635\u0627\u0644\u0648\u0646 \u0627\u0644\u0645\u0631\u064A\u062D\u0629 \u0645\u0639 \u0623\u0641\u0636\u0644 \u0627\u0644\u0645\u062F\u0631\u0628\u064A\u0646 \u0644\u0636\u0645\u0627\u0646 \u062D\u0635\u0648\u0644\u0643 \u0639\u0644\u0649 \u0627\u0644\u0631\u062E\u0635\u0629',
      'services.card4_title': '\u0645\u062F\u0631\u0628\u064A\u0646 \u0639\u0631\u0628',
      'services.card4_desc': '\u0645\u062F\u0631\u0628\u064A\u0646 \u0648\u0645\u062F\u0631\u0628\u0627\u062A \u0639\u0631\u0628 \u0630\u0648\u064A \u062E\u0628\u0631\u0629 \u0637\u0648\u064A\u0644\u0629 \u0641\u064A \u062A\u0639\u0644\u064A\u0645 \u0627\u0644\u0642\u064A\u0627\u062F\u0629 \u064A\u062A\u062D\u062F\u062B\u0648\u0646 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0628\u0637\u0644\u0627\u0642\u0629 \u0645\u0639 \u0635\u0628\u0631 \u0648\u062A\u0641\u0647\u0645',
      'services.card5_title': '\u0645\u062F\u0631\u0628\u064A\u0646 \u0647\u0646\u0648\u062F',
      'services.card5_desc': '\u0645\u062F\u0631\u0628\u064A\u0646 \u0648\u0645\u062F\u0631\u0628\u0627\u062A \u0647\u0646\u0648\u062F \u0645\u062D\u062A\u0631\u0641\u064A\u0646 \u0628\u062E\u0628\u0631\u0629 \u0648\u0627\u0633\u0639\u0629 \u0641\u064A \u062A\u0639\u0644\u064A\u0645 \u0627\u0644\u0642\u064A\u0627\u062F\u0629 \u064A\u062A\u062D\u062F\u062B\u0648\u0646 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0648\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A\u0629 \u0648\u0627\u0644\u0647\u0646\u062F\u064A\u0629',
      'services.card6_title': '\u062A\u062C\u0647\u064A\u0632 \u0644\u0644\u0627\u062E\u062A\u0628\u0627\u0631',
      'services.card6_desc': '\u062A\u062F\u0631\u064A\u0628 \u0645\u0643\u062B\u0641 \u0648\u062A\u062C\u0647\u064A\u0632 \u0643\u0627\u0645\u0644 \u0644\u0627\u062C\u062A\u064A\u0627\u0632 \u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u0642\u064A\u0627\u062F\u0629 \u0627\u0644\u0646\u0647\u0627\u0626\u064A \u0628\u0646\u062C\u0627\u062D \u0645\u0639 \u0645\u062D\u0627\u0643\u0627\u0629 \u0644\u0638\u0631\u0648\u0641 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u062D\u0642\u064A\u0642\u064A',
      'services.learn_more': '\u0627\u0639\u0631\u0641 \u0627\u0644\u0645\u0632\u064A\u062F',
      'services.cta_title': '\u0627\u0628\u062F\u0623 \u0631\u062D\u0644\u0629 \u062A\u0639\u0644\u0645 \u0627\u0644\u0642\u064A\u0627\u062F\u0629 \u0627\u0644\u064A\u0648\u0645!',
      'services.cta_desc': '\u0644\u0627 \u062A\u062A\u0631\u062F\u062F \u0641\u064A \u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627 \u0644\u062D\u062C\u0632 \u0645\u0648\u0639\u062F\u0643\u060C \u0641\u0631\u064A\u0642\u0646\u0627 \u062C\u0627\u0647\u0632 \u0644\u0645\u0633\u0627\u0639\u062F\u062A\u0643 \u0641\u064A \u0627\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u0631\u062E\u0635\u0629 \u0627\u0644\u0642\u064A\u0627\u062F\u0629',
      'services.cta_call': '\u0627\u062A\u0635\u0644: 96566606979',
      'services.cta_whatsapp': '\u0648\u0627\u062A\u0633\u0627\u0628',
      'areas.subtitle': '\u0646\u063A\u0637\u064A \u0627\u0644\u0643\u0648\u064A\u062A \u0628\u0627\u0644\u0643\u0627\u0645\u0644',
      'areas.title': '\u0627\u0644\u0645\u0646\u0627\u0637\u0642 \u0627\u0644\u062A\u064A \u0646\u062E\u062F\u0645\u0647\u0627',
      'areas.desc': '\u0646\u0642\u062F\u0645 \u062E\u062F\u0645\u0627\u062A \u062A\u0639\u0644\u064A\u0645 \u0627\u0644\u0642\u064A\u0627\u062F\u0629 \u0641\u064A \u062C\u0645\u064A\u0639 \u0645\u062D\u0627\u0641\u0638\u0627\u062A \u0627\u0644\u0643\u0648\u064A\u062A \u0627\u0644\u0633\u062A - \u0623\u064A\u0646\u0645\u0627 \u0643\u0646\u062A \u0646\u0635\u0644 \u0625\u0644\u064A\u0643',
      'areas.capital': '\u0627\u0644\u0639\u0627\u0635\u0645\u0629',
      'areas.hawalli': '\u062D\u0648\u0644\u064A',
      'areas.farwaniya': '\u0627\u0644\u0641\u0631\u0648\u0627\u0646\u064A\u0629',
      'areas.ahmadi': '\u0627\u0644\u0623\u062D\u0645\u062F\u064A',
      'areas.jahra': '\u0627\u0644\u062C\u0647\u0631\u0627\u0621',
      'areas.mubarak': '\u0645\u0628\u0627\u0631\u0643 \u0627\u0644\u0643\u0628\u064A\u0631',
      'areas.capital_areas': '\u0627\u0644\u0645\u0631\u0642\u0627\u0628, \u0627\u0644\u062F\u0633\u0645\u0629, \u0628\u0646\u064A\u062F \u0627\u0644\u0642\u0627\u0631, \u0643\u064A\u0641\u0627\u0646, \u0627\u0644\u062F\u0639\u064A\u0629, \u0627\u0644\u0634\u0627\u0645\u064A\u0629, \u0627\u0644\u0631\u0648\u0636\u0629, \u0627\u0644\u0639\u062F\u064A\u0644\u064A\u0629, \u0627\u0644\u062E\u0627\u0644\u062F\u064A\u0629, \u0627\u0644\u0642\u0627\u062F\u0633\u064A\u0629, \u0642\u0631\u0637\u0628\u0629, \u0627\u0644\u0633\u0631\u0629, \u0627\u0644\u064A\u0631\u0645\u0648\u0643, \u0627\u0644\u0634\u0648\u064A\u062E, \u0627\u0644\u0631\u064A',
      'areas.hawalli_areas': '\u062D\u0648\u0644\u064A, \u0627\u0644\u0633\u0627\u0644\u0645\u064A\u0629, \u0627\u0644\u062C\u0627\u0628\u0631\u064A\u0629, \u0627\u0644\u0631\u0645\u064A\u062B\u064A\u0629, \u0633\u0644\u0648\u0649, \u0628\u064A\u0627\u0646, \u0645\u0634\u0631\u0641, \u062D\u0637\u064A\u0646, \u0627\u0644\u0634\u0639\u0628, \u0627\u0644\u0632\u0647\u0631\u0627\u0621, \u0627\u0644\u0646\u0642\u0631\u0629, \u0645\u064A\u062F\u0627\u0646 \u062D\u0648\u0644\u064A',
      'areas.farwaniya_areas': '\u0627\u0644\u0641\u0631\u0648\u0627\u0646\u064A\u0629, \u062E\u064A\u0637\u0627\u0646, \u0627\u0644\u0631\u0627\u0628\u064A\u0629, \u0627\u0644\u0623\u0646\u062F\u0644\u0633, \u0623\u0634\u0628\u064A\u0644\u064A\u0629, \u062C\u0644\u064A\u0628 \u0627\u0644\u0634\u064A\u0648\u062E, \u0627\u0644\u0636\u062C\u064A\u062C, \u0627\u0644\u0641\u0631\u062F\u0648\u0633, \u0627\u0644\u0639\u0645\u0631\u064A\u0629',
      'areas.ahmadi_areas': '\u0627\u0644\u0623\u062D\u0645\u062F\u064A, \u0627\u0644\u0641\u062D\u064A\u062D\u064A\u0644, \u0627\u0644\u0645\u0646\u0642\u0641, \u0627\u0644\u0645\u0647\u0628\u0648\u0644\u0629, \u0627\u0644\u0635\u0628\u0627\u062D\u064A\u0629, \u0627\u0644\u0631\u0642\u0629, \u0647\u062F\u064A\u0629, \u0635\u0628\u0627\u062D \u0627\u0644\u0623\u062D\u0645\u062F, \u0627\u0644\u062E\u064A\u0631\u0627\u0646, \u0627\u0644\u0648\u0641\u0631\u0629',
      'areas.jahra_areas': '\u0627\u0644\u062C\u0647\u0631\u0627\u0621, \u0627\u0644\u0642\u0635\u0631, \u062A\u064A\u0645\u0627\u0621, \u0627\u0644\u0646\u0639\u064A\u0645, \u0627\u0644\u0639\u064A\u0648\u0646, \u0627\u0644\u0648\u0627\u062D\u0629, \u0627\u0644\u0646\u0633\u064A\u0645, \u0643\u0628\u062F, \u0627\u0644\u0635\u0644\u064A\u0628\u064A\u0629, \u0627\u0644\u0635\u0628\u064A\u0629',
      'areas.mubarak_areas': '\u0645\u0628\u0627\u0631\u0643 \u0627\u0644\u0643\u0628\u064A\u0631, \u0635\u0628\u0627\u062D \u0627\u0644\u0633\u0627\u0644\u0645, \u0627\u0644\u0639\u062F\u0627\u0646, \u0627\u0644\u0642\u0635\u0648\u0631, \u0627\u0644\u0642\u0631\u064A\u0646, \u0627\u0644\u0645\u0633\u064A\u0644\u0629, \u0623\u0628\u0648 \u0641\u0637\u064A\u0631\u0629, \u0627\u0644\u0645\u0633\u0627\u064A\u0644, \u0635\u0628\u062D\u0627\u0646',
      'contact.subtitle': '\u0627\u062D\u062C\u0632 \u0627\u0644\u0622\u0646',
      'contact.title': '\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627',
      'contact.desc': '\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627 \u0627\u0644\u0622\u0646 \u0644\u062D\u062C\u0632 \u0645\u0648\u0639\u062F\u0643 \u0623\u0648 \u0644\u0623\u064A \u0627\u0633\u062A\u0641\u0633\u0627\u0631 - \u0641\u0631\u064A\u0642\u0646\u0627 \u062C\u0627\u0647\u0632 \u0644\u062E\u062F\u0645\u062A\u0643',
      'contact.form_title': '\u0627\u062D\u062C\u0632 \u0645\u0648\u0639\u062F\u0643 \u0627\u0644\u0622\u0646',
      'contact.name_label': '\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644',
      'contact.name_placeholder': '\u0623\u062F\u062E\u0644 \u0627\u0633\u0645\u0643 \u0627\u0644\u0643\u0627\u0645\u0644',
      'contact.phone_label': '\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641',
      'contact.phone_placeholder': '\u0631\u0642\u0645 \u0647\u0627\u062A\u0641\u0643',
      'contact.area_label': '\u0627\u0644\u0645\u0646\u0637\u0642\u0629',
      'contact.area_placeholder': '\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0646\u0637\u0642\u0629',
      'contact.car_label': '\u0646\u0648\u0639 \u0627\u0644\u0633\u064A\u0627\u0631\u0629',
      'contact.car_placeholder': '\u0627\u062E\u062A\u0631 \u0646\u0648\u0639 \u0627\u0644\u0633\u064A\u0627\u0631\u0629',
      'contact.car_sedan': '\u0635\u0627\u0644\u0648\u0646',
      'contact.car_suv': '\u062C\u064A\u0628',
      'contact.notes_label': '\u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0625\u0636\u0627\u0641\u064A\u0629',
      'contact.notes_placeholder': '\u0627\u0643\u062A\u0628 \u0645\u0644\u0627\u062D\u0638\u0627\u062A\u0643 \u0647\u0646\u0627',
      'contact.submit': '\u0625\u0631\u0633\u0627\u0644 \u0639\u0628\u0631 \u0648\u0627\u062A\u0633\u0627\u0628',
      'contact.info_title': '\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u062A\u0648\u0627\u0635\u0644',
      'contact.info_whatsapp': '\u0648\u0627\u062A\u0633\u0627\u0628',
      'contact.info_phone': '\u0627\u062A\u0635\u0627\u0644 \u0639\u0627\u062F\u064A',
      'contact.info_location': '\u0627\u0644\u0645\u0648\u0642\u0639',
      'contact.info_location_value': '\u0627\u0644\u0643\u0648\u064A\u062A - \u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u0646\u0627\u0637\u0642',
      'contact.info_hours': '\u0633\u0627\u0639\u0627\u062A \u0627\u0644\u0639\u0645\u0644',
      'contact.info_hours_value': '\u0627\u0644\u0633\u0628\u062A - \u0627\u0644\u062E\u0645\u064A\u0633: 6 \u0635\u0628\u0627\u062D\u0627\u064B - 10 \u0645\u0633\u0627\u0621\u064B',
      'contact.area_option_capital': '\u0627\u0644\u0639\u0627\u0635\u0645\u0629',
      'contact.area_option_hawalli': '\u062D\u0648\u0644\u064A',
      'contact.area_option_farwaniya': '\u0627\u0644\u0641\u0631\u0648\u0627\u0646\u064A\u0629',
      'contact.area_option_ahmadi': '\u0627\u0644\u0623\u062D\u0645\u062F\u064A',
      'contact.area_option_jahra': '\u0627\u0644\u062C\u0647\u0631\u0627\u0621',
      'contact.area_option_mubarak': '\u0645\u0628\u0627\u0631\u0643 \u0627\u0644\u0643\u0628\u064A\u0631',
      'faq.subtitle': '\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629',
      'faq.title': '\u0623\u0633\u0626\u0644\u0629 \u0645\u062A\u0643\u0631\u0631\u0629',
      'faq.desc': '\u0625\u062C\u0627\u0628\u0627\u062A \u0639\u0644\u0649 \u0623\u0643\u062B\u0631 \u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0634\u064A\u0648\u0639\u0627\u064B \u062D\u0648\u0644 \u062E\u062F\u0645\u0627\u062A \u062A\u0639\u0644\u064A\u0645 \u0627\u0644\u0642\u064A\u0627\u062F\u0629 \u0641\u064A \u0627\u0644\u0643\u0648\u064A\u062A',
      'faq.q1': '\u0643\u0645 \u0631\u0633\u0648\u0645 \u062A\u0639\u0644\u064A\u0645 \u0627\u0644\u0642\u064A\u0627\u062F\u0629 \u0641\u064A \u0627\u0644\u0643\u0648\u064A\u062A\u061F',
      'faq.q1_a': '\u062A\u062E\u062A\u0644\u0641 \u0627\u0644\u0631\u0633\u0648\u0645 \u0628\u062D\u0633\u0628 \u0646\u0648\u0639 \u0627\u0644\u0633\u064A\u0627\u0631\u0629 \u0627\u0644\u0645\u062E\u062A\u0627\u0631\u0629 \u0644\u0644\u062A\u062F\u0631\u064A\u0628 (\u062C\u064A\u0628 \u0623\u0648 \u0635\u0627\u0644\u0648\u0646)\u060C \u0628\u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0627\u062E\u062A\u064A\u0627\u0631\u0643 \u0628\u064A\u0646 \u0645\u062F\u0631\u0628 \u0623\u0648 \u0645\u062F\u0631\u0628\u0629\u002E\n\n\u0627\u0644\u062A\u062F\u0631\u064A\u0628 \u0645\u0639 \u0645\u062F\u0631\u0628\u0629 \u0639\u0644\u0649 \u0633\u064A\u0627\u0631\u0629 \u0635\u0627\u0644\u0648\u0646: 15 \u062F\u002E\u0643 \u0644\u0644\u062D\u0635\u0629 \u0627\u0644\u0648\u0627\u062D\u062F\u0629 (\u0645\u062F\u0629 \u0627\u0644\u062D\u0635\u0629 \u0633\u0627\u0639\u062A\u0627\u0646).\n\u0627\u0644\u062A\u062F\u0631\u064A\u0628 \u0645\u0639 \u0645\u062F\u0631\u0628: 10 \u062F\u002E\u0643 \u0644\u0644\u062D\u0635\u0629 \u0627\u0644\u0648\u0627\u062D\u062F\u0629 (\u0645\u062F\u0629 \u0627\u0644\u062D\u0635\u0629 \u0633\u0627\u0639\u062A\u0627\u0646).\n\n\u064A\u0631\u062C\u0649 \u0645\u0644\u0627\u062D\u0638\u0629 \u0623\u0646 \u0627\u0644\u0623\u0633\u0639\u0627\u0631 \u0642\u062F \u062A\u062E\u062A\u0644\u0641 \u062D\u0633\u0628 \u0646\u0648\u0639 \u0627\u0644\u0633\u064A\u0627\u0631\u0629 \u0648\u0627\u0644\u062E\u0637\u0629 \u0627\u0644\u062A\u062F\u0631\u064A\u0628\u064A\u0629 \u0627\u0644\u0645\u062E\u062A\u0627\u0631\u0629\u002E',
      'faq.q2': '\u0643\u064A\u0641 \u0623\u062D\u062C\u0632 \u0645\u0648\u0639\u062F \u0644\u062A\u0639\u0644\u064A\u0645 \u0627\u0644\u0642\u064A\u0627\u062F\u0629\u061F',
      'faq.q2_a': '\u064A\u0645\u0643\u0646\u0643 \u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0639\u0628\u0631 \u0648\u0627\u062A\u0633\u0627\u0628 \u0623\u0648 \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0627\u0644\u0645\u0628\u0627\u0634\u0631\u002E \u0627\u062D\u062C\u0632 \u0627\u0644\u0622\u0646 \u0648\u0633\u0646\u0635\u0644 \u0625\u0644\u064A\u0643 \u0623\u064A\u0646\u0645\u0627 \u0643\u0646\u062A \u0641\u064A \u0627\u0644\u0643\u0648\u064A\u062A\u002E',
      'faq.q3': '\u0647\u0644 \u064A\u0648\u062C\u062F \u0645\u062F\u0631\u0628\u0627\u062A \u0644\u0644\u0646\u0633\u0627\u0621\u061F',
      'faq.q3_a': '\u0646\u0639\u0645\u060C \u0646\u0648\u0641\u0631 \u0645\u062F\u0631\u0628\u0627\u062A \u0642\u064A\u0627\u062F\u0629 \u0645\u062D\u062A\u0631\u0641\u0627\u062A \u0644\u0644\u0646\u0633\u0627\u0621 \u0641\u064A \u062C\u0645\u064A\u0639 \u0645\u0646\u0627\u0637\u0642 \u0627\u0644\u0643\u0648\u064A\u062A\u002E',
      'faq.q4': '\u0643\u0645 \u0645\u062F\u0629 \u0643\u0644 \u062D\u0635\u0629 \u062A\u062F\u0631\u064A\u0628\u061F',
      'faq.q4_a': '\u0643\u0644 \u062D\u0635\u0629 \u062A\u062F\u0631\u064A\u0628 \u0645\u062F\u062A\u0647\u0627 \u0633\u0627\u0639\u062A\u064A\u0646 \u0643\u0627\u0645\u0644\u062A\u064A\u0646 \u0645\u0639 \u0645\u062F\u0631\u0628 \u0623\u0648 \u0645\u062F\u0631\u0628\u0629 \u0645\u062A\u062E\u0635\u0635\u0629\u002E',
      'faq.q5': '\u0647\u0644 \u062A\u063A\u0637\u0648\u0646 \u062C\u0645\u064A\u0639 \u0645\u0646\u0627\u0637\u0642 \u0627\u0644\u0643\u0648\u064A\u062A\u061F',
      'faq.q5_a': '\u0646\u0639\u0645\u060C \u0646\u063A\u0637\u064A \u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u062D\u0627\u0641\u0638\u0627\u062A \u0627\u0644\u0633\u062A: \u0627\u0644\u0639\u0627\u0635\u0645\u0629\u060C \u062D\u0648\u0644\u064A\u060C \u0627\u0644\u0641\u0631\u0648\u0627\u0646\u064A\u0629\u060C \u0627\u0644\u0623\u062D\u0645\u062F\u064A\u060C \u0627\u0644\u062C\u0647\u0631\u0627\u0621\u060C \u0645\u0628\u0627\u0631\u0643 \u0627\u0644\u0643\u0628\u064A\u0631\u002E',
      'faq.q6': '\u0645\u0627 \u0647\u064A \u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A \u0627\u0644\u0645\u062A\u0648\u0641\u0631\u0629 \u0644\u0644\u062A\u062F\u0631\u064A\u0628\u061F',
      'faq.q6_a': '\u0633\u064A\u0627\u0631\u0627\u062A \u062C\u064A\u0628 \u0648\u0633\u064A\u0627\u0631\u0627\u062A \u0635\u0627\u0644\u0648\u0646 \u062D\u062F\u064A\u062B\u0629 \u0648\u0645\u062C\u0647\u0632\u0629 \u0628\u0627\u0644\u0643\u0627\u0645\u0644 \u0644\u0644\u062A\u062F\u0631\u064A\u0628\u002E',
      'faq.q7': '\u0647\u0644 \u062A\u0642\u0628\u0644\u0648\u0646 \u0627\u0644\u062D\u062C\u0648\u0632\u0627\u062A \u0627\u0644\u0622\u0646\u061F',
      'faq.q7_a': '\u0646\u0639\u0645\u060C \u0627\u0644\u062D\u062C\u0648\u0632\u0627\u062A \u0645\u0641\u062A\u0648\u062D\u0629 \u0627\u0644\u0622\u0646\u002E \u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627 \u0639\u0628\u0631 \u0648\u0627\u062A\u0633\u0627\u0628 \u0623\u0648 \u0627\u062A\u0635\u0644 \u0639\u0644\u0649 96566606979\u002E',
      'footer.logo_text': '\u062F',
      'footer.brand': '\u0627\u0644\u062F\u0627\u0646\u0629 \u0644\u062A\u0639\u0644\u064A\u0645 \u0627\u0644\u0642\u064A\u0627\u062F\u0629',
      'footer.desc': '\u0634\u0631\u0643\u0629 \u062A\u0639\u0644\u064A\u0645 \u0627\u0644\u0642\u064A\u0627\u062F\u0629\u060C \u0645\u062F\u0631\u0628\u064A\u0646 \u0648\u0645\u062F\u0631\u0628\u0627\u062A \u0639\u0631\u0628 \u0648\u0647\u0646\u0648\u062F \u0628\u062E\u0628\u0631\u0629\u002E \u0633\u064A\u0627\u0631\u0627\u062A \u062C\u064A\u0628 \u0648\u0635\u0627\u0644\u0648\u0646 \u062D\u062F\u064A\u062B\u0629\u002E \u0646\u063A\u0637\u064A \u062C\u0645\u064A\u0639 \u0645\u0646\u0627\u0637\u0642 \u0627\u0644\u0643\u0648\u064A\u062A\u002E',
      'footer.links_title': '\u0631\u0648\u0627\u0628\u0637 \u0633\u0631\u064A\u0639\u0629',
      'footer.contact_title': '\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627',
      'footer.copyright': '\u00A9 2026 \u0627\u0644\u062F\u0627\u0646\u0629 \u0644\u062A\u0639\u0644\u064A\u0645 \u0627\u0644\u0642\u064A\u0627\u062F\u0629 - \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0642 \u0645\u062D\u0641\u0648\u0638\u0629',
      'floating.whatsapp': '\u062A\u0648\u0627\u0635\u0644 \u0639\u0628\u0631 \u0648\u0627\u062A\u0633\u0627\u0628',
      'floating.call': '\u0627\u062A\u0635\u0644 \u0628\u0646\u0627',
    },
    en: {
      'nav.logo': 'Al Dana',
      'nav.home': 'Home',
      'nav.about': 'About Us',
      'nav.services': 'Services',
      'nav.areas': 'Areas',
      'nav.faq': 'FAQ',
      'nav.contact': 'Contact Us',
      'nav.book': 'Book Now',
      'nav.menu_toggle': 'Toggle menu',
      'nav.lang_toggle': '\u0627\u0644\u0639\u0631\u0628\u064A\u0629',
      'hero.badge': 'Accepting Bookings Now',
      'hero.title_gold': 'Al Dana',
      'hero.title_rest': 'Driving Company',
      'hero.desc1': 'Best Driving Company in Kuwait',
      'hero.desc2': 'Professional Instructors - Modern Cars - All Kuwait Areas',
      'hero.call': 'Call: 96566606979',
      'hero.whatsapp': 'WhatsApp',
      'hero.stat1': 'Years Experience',
      'hero.stat2': 'Kuwait Areas',
      'hero.stat3': 'Instructors',
      'hero.stat4': 'Students Yearly',
      'hero.alt.slide1': 'Driving school background image',
      'hero.alt.slide2': 'Driving school car image',
      'hero.alt.slide3': 'Driving instructor with student',
      'hero.alt.slide4': 'Modern training car',
      'hero.alt.slide5': 'Car driving in Kuwait',
      'hero.alt.phone': 'Phone icon',
      'hero.alt.whatsapp': 'WhatsApp icon',
      'about.subtitle': 'Get to Know Us',
      'about.title': 'About Us',
      'about.desc': 'Al Dana Driving Company is one of the leading driving companies in Kuwait, offering driving education services with the highest quality and safety standards with a distinguished team of Arab and expatriate instructors with extensive experience.',
      'about.highlight': 'We Care About Your Safety on the Road',
      'about.desc2': 'At Al Dana Driving Company, we believe that proper driving education is the foundation of road safety, so we provide comprehensive training covering both theoretical and practical aspects with professional instructors.',
      'about.feature1': 'Highly experienced Arab male and female instructors',
      'about.feature2': 'Professional Indian instructors',
      'about.feature3': 'Modern and well-equipped cars',
      'about.feature4': 'Comprehensive theoretical and practical training',
      'about.feature5': 'Female instructors for women\'s driving lessons in Kuwait',
      'about.feature6': 'Competitive prices and special offers',
      'about.card1_title': 'Modern Cars',
      'about.card1_desc': 'Fully equipped modern cars ensuring an excellent learning experience',
      'about.card2_title': 'Flexible Hours',
      'about.card2_desc': 'We offer flexible hours to suit your daily schedule throughout the week',
      'about.card3_title': 'Comprehensive Coverage',
      'about.card3_desc': 'We cover all areas of Kuwait with professional service',
      'about.card4_title': 'Excellent Team',
      'about.card4_desc': 'Professional instructors with extensive experience in driving education',
      'about.exp': 'Years Experience',
      'about.alt': 'Professional driving instructor',
      'services.subtitle': 'What We Offer',
      'services.title': 'Our Services',
      'services.desc': 'We offer a comprehensive range of driving education services to meet the needs of all trainees',
      'services.card1_title': 'Theoretical Training',
      'services.card1_desc': 'Comprehensive theoretical lessons covering Kuwait traffic laws, signals and road signs to ensure your success in the theory test',
      'services.card2_title': 'Practical Training - SUV',
      'services.card2_desc': 'Practical training on modern SUV cars with professional instructors throughout Kuwait',
      'services.card3_title': 'Practical Training - Sedan',
      'services.card3_desc': 'Practical training on comfortable sedan cars with the best instructors to ensure you get your license',
      'services.card4_title': 'Arab Instructors',
      'services.card4_desc': 'Experienced Arab male and female instructors fluent in Arabic with patience and understanding',
      'services.card5_title': 'Indian Instructors',
      'services.card5_desc': 'Professional Indian male and female instructors with vast experience speaking Arabic, English and Hindi',
      'services.card6_title': 'Test Preparation',
      'services.card6_desc': 'Intensive training and full preparation to pass the final driving test with simulation of real test conditions',
      'services.learn_more': 'Learn More',
      'services.cta_title': 'Start Your Driving Journey Today!',
      'services.cta_desc': 'Do not hesitate to contact us to book your appointment, our team is ready to help you get your driving license',
      'services.cta_call': 'Call: 96566606979',
      'services.cta_whatsapp': 'WhatsApp',
      'areas.subtitle': 'Covering All of Kuwait',
      'areas.title': 'Areas We Serve',
      'areas.desc': 'We provide driving education services in all six governorates of Kuwait - wherever you are, we come to you',
      'areas.capital': 'Capital',
      'areas.hawalli': 'Hawalli',
      'areas.farwaniya': 'Farwaniya',
      'areas.ahmadi': 'Ahmadi',
      'areas.jahra': 'Jahra',
      'areas.mubarak': 'Mubarak Al-Kabeer',
      'areas.capital_areas': 'Mirqab, Dasma, Bneid Al-Qar, Kaifan, Daiya, Shamiah, Rawda, Adailiya, Khaldiya, Qadsia, Qurtuba, Surra, Yarmouk, Shuwaikh, Ray',
      'areas.hawalli_areas': 'Hawalli, Salmiya, Jabriya, Rumaithiya, Salwa, Bayan, Mishref, Hittin, Shab, Zahra, Nuqra, Hawalli Park',
      'areas.farwaniya_areas': 'Farwaniya, Khaitan, Rabiya, Andalus, Ishbiliya, Jleeb Al-Shuyoukh, Dajeej, Firdous, Omariya',
      'areas.ahmadi_areas': 'Ahmadi, Fahaheel, Mangaf, Mahboula, Sabahiya, Riqqa, Hadiya, Sabah Al-Ahmad, Khiran, Wafra',
      'areas.jahra_areas': 'Jahra, Qasr, Taima, Naeem, Uyoun, Waha, Naseem, Kabd, Sulaibiya, Subiya',
      'areas.mubarak_areas': 'Mubarak Al-Kabeer, Sabah Al-Salem, Adan, Qusour, Qurain, Mesila, Abu Fatira, Masayel, Subhan',
      'contact.subtitle': 'Book Now',
      'contact.title': 'Contact Us',
      'contact.desc': 'Contact us now to book your appointment or for any inquiry - our team is ready to serve you',
      'contact.form_title': 'Book Your Appointment Now',
      'contact.name_label': 'Full Name',
      'contact.name_placeholder': 'Enter your full name',
      'contact.phone_label': 'Phone Number',
      'contact.phone_placeholder': 'Your phone number',
      'contact.area_label': 'Area',
      'contact.area_placeholder': 'Select your area',
      'contact.car_label': 'Car Type',
      'contact.car_placeholder': 'Select car type',
      'contact.car_sedan': 'Sedan',
      'contact.car_suv': 'SUV',
      'contact.notes_label': 'Additional Notes',
      'contact.notes_placeholder': 'Write your notes here',
      'contact.submit': 'Send via WhatsApp',
      'contact.info_title': 'Contact Information',
      'contact.info_whatsapp': 'WhatsApp',
      'contact.info_phone': 'Phone Call',
      'contact.info_location': 'Location',
      'contact.info_location_value': 'Kuwait - All Areas',
      'contact.info_hours': 'Working Hours',
      'contact.info_hours_value': 'Saturday - Thursday: 6 AM - 10 PM',
      'contact.area_option_capital': 'Capital',
      'contact.area_option_hawalli': 'Hawalli',
      'contact.area_option_farwaniya': 'Farwaniya',
      'contact.area_option_ahmadi': 'Ahmadi',
      'contact.area_option_jahra': 'Jahra',
      'contact.area_option_mubarak': 'Mubarak Al-Kabeer',
      'faq.subtitle': 'FAQ',
      'faq.title': 'Frequently Asked Questions',
      'faq.desc': 'Answers to the most common questions about driving education services in Kuwait',
      'faq.q1': 'How much does driving lessons cost in Kuwait?',
      'faq.q1_a': 'Fees vary depending on the car type chosen for training (SUV or sedan), in addition to your choice between a male or female instructor.\n\nTraining with a female instructor on a sedan car: 15 KWD per session (2 hours per session).\nTraining with a male instructor: 10 KWD per session (2 hours per session).\n\nPlease note that prices may vary depending on the car type and the selected training plan.',
      'faq.q2': 'How can I book a driving lesson?',
      'faq.q2_a': 'You can contact us via WhatsApp or call us directly. Book now and we will come to you anywhere in Kuwait.',
      'faq.q3': 'Are there female instructors for women?',
      'faq.q3_a': 'Yes, we provide professional female driving instructors for women in all areas of Kuwait.',
      'faq.q4': 'How long is each training session?',
      'faq.q4_a': 'Each training session is 2 full hours with a specialized instructor.',
      'faq.q5': 'Do you cover all areas of Kuwait?',
      'faq.q5_a': 'Yes, we cover all 6 governorates: Capital, Hawalli, Farwaniya, Ahmadi, Jahra, Mubarak Al-Kabeer.',
      'faq.q6': 'What types of cars are available for training?',
      'faq.q6_a': 'Modern SUV and sedan cars, fully equipped for training.',
      'faq.q7': 'Are you accepting bookings now?',
      'faq.q7_a': 'Yes, bookings are open now. Contact us via WhatsApp or call 96566606979.',
      'footer.logo_text': 'D',
      'footer.brand': 'Al Dana Driving Company',
      'footer.desc': 'Best driving school in Kuwait with experienced Arab and Indian instructors. Modern sedan and SUV cars. We cover all areas of Kuwait.',
      'footer.links_title': 'Quick Links',
      'footer.contact_title': 'Contact Us',
      'footer.copyright': '\u00A9 2026 Al Dana Driving Company - All Rights Reserved',
      'floating.whatsapp': 'Contact via WhatsApp',
      'floating.call': 'Call Us',
    }
  };

  var currentLang = localStorage.getItem('danaLang') || 'ar';

  function applyLanguage(lang) {
    currentLang = lang;
    try { localStorage.setItem('danaLang', lang); } catch(e) {}

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    var ltrLink = document.getElementById('ltr-css');
    if (ltrLink) {
      ltrLink.disabled = (lang === 'ar');
    }

    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key] !== undefined) {
        if (el.tagName === 'TITLE') {
          var t1 = translations[lang]['hero.title_gold'] || '';
          var t2 = translations[lang]['hero.title_rest'] || '';
          el.textContent = t1 + ' ' + t2;
        } else {
          el.textContent = translations[lang][key];
        }
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (translations[lang] && translations[lang][key] !== undefined) {
        el.placeholder = translations[lang][key];
      }
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-alt');
      if (translations[lang] && translations[lang][key] !== undefined) {
        el.alt = translations[lang][key];
      }
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-aria');
      if (translations[lang] && translations[lang][key] !== undefined) {
        el.setAttribute('aria-label', translations[lang][key]);
      }
    });

    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      var d1 = translations[lang]['hero.desc1'] || '';
      var d2 = translations[lang]['hero.desc2'] || '';
      metaDesc.content = d1 + ' - ' + d2;
    }

    var areaKeys = [
      'areas.capital_areas',
      'areas.hawalli_areas',
      'areas.farwaniya_areas',
      'areas.ahmadi_areas',
      'areas.jahra_areas',
      'areas.mubarak_areas'
    ];
    document.querySelectorAll('.area-tags').forEach(function(container, index) {
      if (index < areaKeys.length) {
        var key = areaKeys[index];
        var areasStr = (translations[lang] && translations[lang][key]) || '';
        var areas = areasStr.split(', ');
        container.textContent = '';
        areas.forEach(function(a) {
          var span = document.createElement('span');
          span.textContent = a;
          container.appendChild(span);
        });
      }
    });
  }

  function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('active');
    document.getElementById('menuBtn').classList.toggle('open');
    var expanded = document.getElementById('navLinks').classList.contains('active');
    document.getElementById('menuBtn').setAttribute('aria-expanded', expanded);
  }

  function sendToWhatsapp(event) {
    event.preventDefault();
    var name = document.getElementById('name').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var area = document.getElementById('area').value;
    var car = document.getElementById('car').value;
    var notes = document.getElementById('notes').value.trim();
    var msg = '\u0637\u0644\u0628 \u062D\u062C\u0632 \u0645\u0648\u0639\u062F%0A' +
      '\u0627\u0644\u0627\u0633\u0645: ' + encodeURIComponent(name) + '%0A' +
      '\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641: ' + encodeURIComponent(phone) + '%0A' +
      '\u0627\u0644\u0645\u0646\u0637\u0642\u0629: ' + encodeURIComponent(area) + '%0A' +
      '\u0646\u0648\u0639 \u0627\u0644\u0633\u064A\u0627\u0631\u0629: ' + encodeURIComponent(car) + '%0A' +
      '\u0645\u0644\u0627\u062D\u0638\u0627\u062A: ' + encodeURIComponent(notes);
    window.open('https://wa.me/96566606979?text=' + msg, '_blank', 'noopener,noreferrer');
  }

  document.addEventListener('DOMContentLoaded', function() {
    applyLanguage(currentLang);

    var menuBtn = document.getElementById('menuBtn');
    if (menuBtn) {
      menuBtn.addEventListener('click', toggleMenu);
    }

    var contactForm = document.querySelector('.contact-form-card form');
    if (contactForm) {
      contactForm.addEventListener('submit', sendToWhatsapp);
    }

    document.querySelectorAll('.service-learn-more').forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        var card = this.closest('.service-card');
        if (!card) return;
        var h3 = card.querySelector('h3');
        if (!h3) return;
        var key = h3.getAttribute('data-i18n');
        var serviceName = (translations[currentLang] && translations[currentLang][key]) || h3.textContent;
        var prefix = currentLang === 'ar'
          ? '\u0627\u0631\u064A\u062F \u0627\u0646 \u0627\u0639\u0631\u0641 \u0627\u0644\u0645\u0632\u064A\u062F \u062D\u0648\u0644'
          : 'I want to know more about';
        var msg = encodeURIComponent(prefix + ' ' + serviceName);
        window.open('https://wa.me/96566606979?text=' + msg, '_blank', 'noopener,noreferrer');
      });
    });

    var langBtn = document.querySelector('.lang-switch');
    if (langBtn) {
      langBtn.addEventListener('click', function(e) {
        e.preventDefault();
        applyLanguage(currentLang === 'ar' ? 'en' : 'ar');
      });
    }

    var slides = document.querySelectorAll('#home .hero-slide');
    if (slides.length) {
      var currentSlide = 0;
      function loadSlideImg(index) {
        var img = slides[index].querySelector('img');
        if (img && img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
      }
      loadSlideImg(0);
      setInterval(function() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
        loadSlideImg(currentSlide);
      }, 5000);
    }

    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        var href = this.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        var target = document.querySelector(href);
        if (target) {
          var header = document.querySelector('.header');
          var offset = header ? header.offsetHeight : 0;
          var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
        var navLinks = document.getElementById('navLinks');
        var menuBtn = document.getElementById('menuBtn');
        if (navLinks && navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
          if (menuBtn) menuBtn.classList.remove('open');
        }
      });
    });
  });
})();
