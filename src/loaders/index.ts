import mongooseLoader from './mongoose';
import iocContainerLoader from './iocContainer';
import { logger } from '../lib';

const loader = async () => {
  try {
    await mongooseLoader();
    logger.info(`🛸️ MongoDB loaded successfully`);

    await iocContainerLoader();
    logger.info(`🚀 Dependency Injector loaded successfully`);

    logger.info('💯 Express loaded successfully');
  } catch (error: any) {
    logger.error(error.message);
    logger.error(error);
  }
};

export default loader;
