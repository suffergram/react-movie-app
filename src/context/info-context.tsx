import React from 'react';
import { InfoType } from '../components/info-provider/info-provider';

type InfoContextType = {
  handleInfoOpen(infoState: InfoType): void;
  handleInfoClose(): void;
  info: InfoType | null;
};

const InfoContext = React.createContext<InfoContextType>({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleInfoOpen: (infoState: InfoType) => {
    // init value
  },
  handleInfoClose: () => {
    // init value
  },
  info: null,
});

export default InfoContext;
