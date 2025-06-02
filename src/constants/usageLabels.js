// #file: UsageLabels.js
// #purpose: A listing of predefined usage labels for over-the-counter medications.

const PainManagement = {
  PAIN_RELIEF: "pain-relief",
  ANTI_INFLAMMATORY: "anti-inflammatory",
  HEADACHE_RELIEF: "headache-relief",
};

const FeverCold = {
  FEVER_REDUCTION: "fever-reduction",
  COUGH_SUPPRESSANT: "cough-suppressant",
  DECONGESTANT: "decongestant",
  ALLERGY_RELIEF: "allergy-relief",
};

const DigestiveHealth = {
  DIGESTIVE_AID: "digestive-aid",
  ANTACID: "antacid",
  LAXATIVE: "laxative",
};

const SkinTopical = {
  SKIN_TREATMENT: "skin-treatment",
  TOPICAL_ANTI_INFLAMMATORY: "topical-anti-inflammatory",
  ANTISEPTIC: "antiseptic",
};

const SleepRelaxation = {
  SLEEP_AID: "sleep-aid",
  ANXIETY_REDUCTION: "anxiety-reduction",
};

const VitaminSupplements = {
  VITAMIN_SUPPLEMENT: "vitamin-supplement",
  MINERAL_SUPPLEMENT: "mineral-supplement",
};

const Miscellaneous = {
  ENERGY_BOOST: "energy-boost",
  IMMUNE_SUPPORT: "immune-support",
};

// Combine all categories into one final UsageLabels object
const UsageLabels = Object.freeze( {
  ...PainManagement,
  ...FeverCold,
  ...DigestiveHealth,
  ...SkinTopical,
  ...SleepRelaxation,
  ...VitaminSupplements,
  ...Miscellaneous,
});

export { UsageLabels };
