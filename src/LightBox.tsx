import type { FC } from 'react';


import { Modal } from './Modal';

interface LightBoxProps {
  onClose: () => void;
  show: boolean;
  url: null | string;
}

export const LightBox: FC<LightBoxProps> = ({ onClose, show, url }) => {
  return (
    <Modal onClose={onClose} show={show}>
      <img
        alt={url || ''}
        className="max-h-screen rounded-xl"
        height={1000}
        onClick={onClose}
        src={url || ''}
        width={1000}
      />
    </Modal>
  );
};