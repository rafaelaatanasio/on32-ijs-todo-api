import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksService } from './tasks/tasks.service';
import { TasksController } from './tasks/tasks.controller';

@Module({ // decorators de modulos, metadados @, vai indicador o comportamento daquela estrutura
  imports: [], // se necessário por aqui importo outros módulos
  controllers: [AppController, TasksController], // lista dos controlers utilizados
  providers: [AppService, TasksService], // provedores registrados nos módulos, as services
})
export class AppModule {}
