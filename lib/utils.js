export const joinTypesWithSlash = (types) => {
  return types.map((type) => type.type.name).join(" / ");
};

export const removeHyphenFromMoves = (moves) => {
  return moves.map((move) => move.move.name.replace("-", " "));
};

export const formatMoveList = (moves) => {
  return removeHyphenFromMoves(moves).join(", ");
};

export const removeHyphenFromAbilities = (abilities) => {
  return abilities.map((ability) => ability.ability.name.replace("-", " "));
};

export const formatAbilityList = (moves) => {
  return removeHyphenFromAbilities(moves).join(", ");
};
