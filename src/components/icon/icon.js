/* @flow */
import * as React from 'react';
import styled from 'styled-components';

import { fromInternalTheme } from '../../styleUtils';

import StarIcon from './icons/star.js';
import Star2Icon from './icons/star2.js';
import Star3Icon from './icons/star3.js';
import Star3IconPlus from './icons/star3Plus.js';
import Star3IconMinus from './icons/star3Minus.js';
import ImageIcon from './icons/image.js';
import MailIcon from './icons/mail.js';
import PhoneIcon from './icons/phone.js';
import CloseIcon from './icons/close.js';
import TimingIcon from './icons/timing.js';
import PrizeIcon from './icons/prize.js';
import RemoveIcon from './icons/remove.js';
import AlertIcon from './icons/alert.js';
import FlagIcon from './icons/flag.js';
import EmbedIcon from './icons/embed.js';
import DeleteIcon from './icons/delete.js';
import BackToTopIcon from './icons/backToTop.js';
import ContactEyeEmIcon from './icons/contactEyeEm.js';
import ContactFacebookIcon from './icons/contactFacebook.js';
import ContactTwitterIcon from './icons/contactTwitter.js';
import ContactTumblrIcon from './icons/contactTumblr.js';

import DownloadIcon from './icons/download.js';
import UploadIcon from './icons/upload.js';
import CheckmarkIcon from './icons/checkmark.js';
import CartIcon from './icons/cart.js';
import CompDownloadIcon from './icons/compDownload.js';
import AddToLightboxIcon from './icons/addToLightbox.js';
import IsInLightboxIcon from './icons/isInLightbox.js';
import LikeIcon from './icons/like.js';
import CommentIcon from './icons/comment.js';
import DragNDrop from './icons/dragndrop.js';
import ShareIcon from './icons/share.js';

import FacebookIcon from './icons/facebook.js';
import DropboxIcon from './icons/dropbox.js';
import GoogleDriveIcon from './icons/googledrive.js';
import FlickrIcon from './icons/flickr.js';
import PicasaIcon from './icons/picasa.js';
import InstagramIcon from './icons/instagram.js';

import PlusIcon from './icons/plus.js';
import LeftArrow from './icons/leftArrow.js';
import LeftArrow2 from './icons/leftArrow2.js';
import RightArrow from './icons/rightArrow.js';
import Terms from './icons/terms.js';
import Market from './icons/market.js';
import Growth from './icons/growth.js';
import EyeEmVision from './icons/eyeEmVision.js';
import Trophy from './icons/trophy.js';
import TrophyPlus from './icons/trophyPlus.js';
import TrophyMinus from './icons/trophyMinus.js';

const icons = {
  star: StarIcon,
  star2: Star2Icon,
  star3: Star3Icon,
  star3Plus: Star3IconPlus,
  star3Minus: Star3IconMinus,
  image: ImageIcon,
  mail: MailIcon,
  phone: PhoneIcon,
  close: CloseIcon,
  timing: TimingIcon,
  prize: PrizeIcon,
  remove: RemoveIcon,
  alert: AlertIcon,
  flag: FlagIcon,
  embed: EmbedIcon,
  delete: DeleteIcon,
  backToTop: BackToTopIcon,
  contactEyeEm: ContactEyeEmIcon,
  contactFacebook: ContactFacebookIcon,
  contactTwitter: ContactTwitterIcon,
  contactTumblr: ContactTumblrIcon,

  cart: CartIcon,
  checkmark: CheckmarkIcon,
  compDownload: CompDownloadIcon,
  download: DownloadIcon,
  upload: UploadIcon,
  dragndrop: DragNDrop,
  addToLightbox: AddToLightboxIcon,
  isInLightbox: IsInLightboxIcon,
  like: LikeIcon,
  comment: CommentIcon,
  share: ShareIcon,
  facebook: FacebookIcon,

  dropbox: DropboxIcon,
  googledrive: GoogleDriveIcon,
  flickr: FlickrIcon,
  picasa: PicasaIcon,
  instagram: InstagramIcon,

  leftArrow: LeftArrow,
  leftArrow2: LeftArrow2,
  rightArrow: RightArrow,
  plus: PlusIcon,
  terms: Terms,
  market: Market,
  growth: Growth,
  eyeEmVision: EyeEmVision,
  trophy: Trophy,
  trophyPlus: TrophyPlus,
  trophyMinus: TrophyMinus
};

function Icon(props: {
  className: string,
  id: string,
  type: string,
  size: number,
  color?: string, // if this is undefined, the icon just inherits the parents' 'fill' CSS property
  iconProps: Object
}) {
  let Component = icons[props.type] || StarIcon;

  if (props.color) {
    Component = styled(Component)`
      fill: ${fromInternalTheme(`colors.${props.color}`)};
    `;
  }

  return (
    <Component
      className={props.className}
      id={props.id}
      size={props.size}
      iconProps={props.iconProps}
    />
  );
}

Icon.defaultProps = {
  color: undefined
};

export default Icon;
