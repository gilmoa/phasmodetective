const GhostsInfo = [
  {
    name: "spirit",
    checks: {
      box: true,
      prints: true,
      writing: true,
      freeze: false,
      emf: false,
      orbs: false,
    },
  },
  {
    name: "wraith",
    checks: {
      box: true,
      prints: true,
      writing: false,
      freeze: true,
      emf: false,
      orbs: false,
    },
  },
  {
    name: "phantom",
    checks: {
      box: false,
      prints: false,
      writing: false,
      freeze: true,
      emf: true,
      orbs: true,
    },
  },
  {
    name: "poltergeist",
    checks: {
      box: true,
      prints: true,
      writing: false,
      freeze: false,
      emf: false,
      orbs: true,
    },
  },
  {
    name: "banshee",
    checks: {
      box: false,
      prints: true,
      writing: false,
      freeze: true,
      emf: true,
      orbs: false,
    },
  },
  {
    name: "jinn",
    checks: {
      box: true,
      prints: false,
      writing: false,
      freeze: false,
      emf: true,
      orbs: true,
    },
  },
  {
    name: "mare",
    checks: {
      box: true,
      prints: false,
      writing: false,
      freeze: true,
      emf: false,
      orbs: true,
    },
  },
  {
    name: "revenant",
    checks: {
      box: false,
      prints: true,
      writing: true,
      freeze: false,
      emf: true,
      orbs: false,
    },
  },
  {
    name: "shade",
    checks: {
      box: false,
      prints: false,
      writing: true,
      freeze: false,
      emf: true,
      orbs: true,
    },
  },
  {
    name: "demon",
    checks: {
      box: true,
      prints: false,
      writing: true,
      freeze: true,
      emf: false,
      orbs: false,
    },
  },
  {
    name: "yurei",
    checks: {
      box: false,
      prints: false,
      writing: true,
      freeze: false,
      emf: true,
      orbs: true,
    },
  },
  {
    name: "oni",
    checks: {
      box: true,
      prints: false,
      writing: true,
      freeze: false,
      emf: true,
      orbs: false,
    },
  },
];

export default GhostsInfo;
