import { signInPageUrl } from '@codesandbox/common/lib/utils/url-generator';
import React, { useEffect, FunctionComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { client } from 'app/graphql/client';
import { useOvermind } from 'app/overmind';
import codesandboxBlack from '@codesandbox/components/lib/themes/codesandbox-black';
import { ThemeProvider, Stack } from '@codesandbox/components';
import css from '@styled-system/css';

import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Content } from './Content';

export const Dashboard: FunctionComponent = () => {
  const {
    actions: {
      dashboard: { dashboardMounted },
    },
    state: { hasLogIn },
  } = useOvermind();

  useEffect(() => {
    dashboardMounted();

    // Reset store so new visits get fresh data
    return () => client.resetStore();
  }, [dashboardMounted]);

  if (!hasLogIn) {
    return <Redirect to={signInPageUrl()} />;
  }

  return (
    <ThemeProvider theme={codesandboxBlack}>
      <Stack direction="vertical">
        <Header />
        <Stack
          gap={6}
          css={css({
            backgroundColor: 'sideBar.background',
            fontFamily: "'Inter', sans-serif",
            color: 'sideBar.foreground',
            minHeight: 'calc(100vh - 48px)',
            width: '100vw',
          })}
        >
          <Sidebar />
          <Content />
        </Stack>
      </Stack>
    </ThemeProvider>
  );
};
