import { Injectable } from '@nestjs/common';

import { ConfigName } from '@server/Config/enums/ConfigName';
import { NodeEnv } from '@common/enums/NodeEnv';
import { ErrorCode } from '@server/SystemError/enums/ErrorCode';
import { SystemErrorFactory } from '@server/SystemError/factories/SystemErrorFactory';
import { TConfigItem } from '@server/Config/types/TConfigItem';

@Injectable()
export class ConfigService {
  public constructor(private readonly systemErrorFactory: SystemErrorFactory) {}

  public get<ConfigItem extends TConfigItem>(
    name: ConfigItem,
  ): NodeJS.ProcessEnv[ConfigItem] {
    const configParam = process.env[name];

    if (!configParam) {
      throw this.systemErrorFactory.create(
        ErrorCode.CONFIG_PARAM_NOT_FOUND,
        `Не найден параметр конфига: ${name}`,
      );
    }

    return configParam;
  }

  public get IsDev(): boolean {
    return this.get(ConfigName.NODE_ENV) === NodeEnv.DEVELOPMENT;
  }
}
