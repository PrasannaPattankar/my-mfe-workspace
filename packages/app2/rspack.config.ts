import { composePlugins, withNx, withReact } from '@nx/rspack';
import { withModuleFederation } from '@nx/rspack/module-federation';
import baseConfig from './module-federation.config';

const config = {
  ...baseConfig,
};

export default function (pluginOptions: any = {}, context: any = {}) {
  context.options ??= {};
  context.options.output ??= { publicPath: 'auto' };
  context.project ??= { root: '' };

  return composePlugins(
    withNx(),
    withReact(),
    withModuleFederation(config, { dts: false })
  )(pluginOptions, context);
}
