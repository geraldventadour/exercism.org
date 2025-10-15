//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  const trimmedMessage = message.trim();
  const isSilence = !trimmedMessage.trim();
  const includesUppercase = /[A-Z]/.test(trimmedMessage);
  const isQuestion = trimmedMessage.endsWith("?");
  const isYelling =
    includesUppercase && trimmedMessage === trimmedMessage.toUpperCase();

  const messageWhen = {
    isSilence: "Fine. Be that way!",
    isYelling: "Whoa, chill out!",
    isYellingQuestion: `Calm down, I know what I'm doing!`,
    isQuestion: "Sure.",
    isWhatever: "Whatever.",
  };

  if (isSilence) {
    return messageWhen.isSilence;
  }

  if (isYelling) {
    return isQuestion ? messageWhen.isYellingQuestion : messageWhen.isYelling;
  }

  if (isQuestion) {
    return messageWhen.isQuestion;
  }

  return messageWhen.isWhatever;
};
