/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function () {
  console.log("Schrecknet : loading subroutines");
  // Define template paths to load
  const templatePaths = [
    // Actor Sheet Partials
    "systems/vm20-dark-age/templates/actor/parts/biography.html",
    "systems/vm20-dark-age/templates/actor/parts/disciplines.html",
    "systems/vm20-dark-age/templates/actor/parts/exp.html",
    "systems/vm20-dark-age/templates/actor/parts/features.html",
    "systems/vm20-dark-age/templates/actor/parts/frenzy.html",
    "systems/vm20-dark-age/templates/actor/parts/health.html",
    "systems/vm20-dark-age/templates/actor/parts/humanity.html",
    "systems/vm20-dark-age/templates/actor/parts/bloodpool.html",
    "systems/vm20-dark-age/templates/actor/parts/profile-img.html",
    "systems/vm20-dark-age/templates/actor/parts/other.html",
    "systems/vm20-dark-age/templates/actor/parts/rotschreck.html",
    "systems/vm20-dark-age/templates/actor/parts/stats.html",
    "systems/vm20-dark-age/templates/actor/parts/willpower.html",
    "systems/vm20-dark-age/templates/actor/parts/combat.html",

    // Item Sheet Partials
    "systems/vm20-dark-age/templates/item/parts/skills.html",
    "systems/vm20-dark-age/templates/item/parts/disciplines.html",
    "systems/vm20-dark-age/templates/item/parts/attributes.html",
    "systems/vm20-dark-age/templates/item/parts/virtues.html",
  ];

  /* Load the template parts
     That function is part of foundry, not founding it here is normal
  */
  return loadTemplates(templatePaths); // eslint-disable-line no-undef
};
