export type CardType = 'provision' | 'character';

export type Card = {
  name: string;
  frontImage: string;
  backImage: string;
  flipped: boolean;
  altText: string;
  type: CardType;
};
