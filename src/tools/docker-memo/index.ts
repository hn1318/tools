import { BrandDocker } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.docker-memo.title'),
  path: '/docker-memo',
  description: translate('tools.docker-memo.description'),
  keywords: ['docker', 'compose', 'container', 'image', 'volume', 'registry', '镜像', '容器', '编排'],
  component: () => import('./docker-memo.vue'),
  icon: BrandDocker,
});
