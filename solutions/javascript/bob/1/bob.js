//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  const trimmedMessage = message.trim();
  const includesUppercase = /[A-Z]/g.test(trimmedMessage);
  const includesLowercase = /[a-z]/g.test(trimmedMessage);
  const isQuestion = /\?$/.test(trimmedMessage);
  const isSilence = !trimmedMessage.trim();
  const isYelling = includesUppercase && !includesLowercase;
  const isYellingQuestion = isQuestion && isYelling;

  if (isSilence) {
    return "Fine. Be that way!";
  }

  if (isYellingQuestion) {
    return `Calm down, I know what I'm doing!`;
  }

  if (isYelling) {
    return "Whoa, chill out!";
  }

  if (isQuestion) {
    return "Sure.";
  }

  return "Whatever.";
};
