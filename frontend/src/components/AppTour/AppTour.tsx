import React from 'react';
import { Joyride, STATUS } from 'react-joyride';
import type { EventData, Step } from 'react-joyride';
import { useLocalStorage } from 'lib/hooks/useLocalStorage';
import { useTheme } from 'styled-components';

const STEPS: Step[] = [
  {
    target: '[data-tour="navbar"]',
    title: 'Welcome to Kafbat UI',
    content:
      'A free, open-source web UI for managing Apache Kafka clusters. Use the top bar to switch themes, set your timezone, or access GitHub and Discord.',
    placement: 'bottom',
  },
  {
    target: '[data-tour="sidebar"]',
    title: 'Cluster Navigation',
    content:
      'All your connected Kafka clusters appear here. Expand a cluster to access Brokers, Topics, Consumers, Schema Registry, and Kafka Connect.',
    placement: 'right',
  },
  {
    target: '[data-tour="cluster-menu"]',
    title: 'Cluster Menu',
    content:
      'Each cluster has its own menu. Click the cluster name to view broker details, or expand it to navigate to Topics, Consumer Groups, and more.',
    placement: 'right',
  },
  {
    target: '[data-tour="dashboard-metrics"]',
    title: 'Cluster Health at a Glance',
    content:
      'See how many clusters are online vs offline in real time. Use the toggle below to filter and focus on offline clusters that need attention.',
    placement: 'bottom',
  },
  {
    target: '[data-tour="dashboard-table"]',
    title: 'Cluster Overview Table',
    content:
      'Each row is a cluster. Click any row to drill into its brokers. Columns show version, broker count, partitions, topics, and live throughput.',
    placement: 'top',
  },
];

const AppTour: React.FC = () => {
  const [tourDone, setTourDone] = useLocalStorage<boolean>(
    'app-tour-done',
    false
  );
  const theme = useTheme();

  const handleEvent = (data: EventData) => {
    if (data.status === STATUS.FINISHED || data.status === STATUS.SKIPPED) {
      setTourDone(true);
    }
  };

  if (tourDone) return null;

  return (
    <Joyride
      steps={STEPS}
      run
      continuous
      scrollToFirstStep
      onEvent={handleEvent}
      options={{
        skipBeacon: true,
        showProgress: true,
        buttons: ['back', 'primary', 'skip'],
        primaryColor: theme.button.primary.backgroundColor.normal,
        backgroundColor: theme.confirmModal.backgroundColor,
        textColor: theme.modal.color,
        overlayColor: 'rgba(0,0,0,0.45)',
        zIndex: 10000,
      }}
      locale={{
        back: 'Back',
        close: 'Close',
        last: 'Done',
        next: 'Next',
        skip: 'Skip tour',
      }}
    />
  );
};

export default AppTour;
