import { PropsWithChildren, useMemo, useState } from 'react';
import { InfoContext } from '../../context/info-context';
import { ModalState } from '../../types/modal-state';
import { Movie } from '../../types/movie';

export type InfoType = {
  name: ModalState.Info;
  data: Movie;
};

export function InfoProvider({ children }: PropsWithChildren) {
  const [info, setInfo] = useState<InfoType | null>(null);

  const infoContextValue = useMemo(
    () => ({
      handleInfoOpen: (infoState: InfoType) => setInfo(infoState),
      handleInfoClose: () => setInfo(null),
      info,
    }),
    [info]
  );

  return (
    <InfoContext.Provider value={infoContextValue}>
      {children}
    </InfoContext.Provider>
  );
}
