// Copyright 2019-2025 @polkadot/extension-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { styled } from '../styled.js';

interface Props {
  children: React.ReactNode;
  className?: string;
  noBorder?: boolean;
  title?: React.ReactNode;
}

function MenuItem ({ children, className = '', title }: Props): React.ReactElement<Props> {
  return (
    <div className={`${className}${title ? ' isTitled' : ''}`}>
      {title && (
        <div className='itemTitle'>{title}</div>
      )}
      {children}
    </div>
  );
}

export default styled(MenuItem)<Props>`
  min-width: 13rem;
  padding: 0 16px;
  max-width: 100%;

  > .itemTitle {
    margin: 0;
    width: 100%;
    font-size: var(--inputLabelFontSize);
    line-height: 14px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--textColor);
    opacity: 0.65;
  }

  &+&.isTitled {
    margin-top: 16px;
  }
`;
