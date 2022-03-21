import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './controller/product.controller';
import { ProductService } from './service/product.service';

describe('AppController', () => {
  let appController: ProductController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [ProductService],
    }).compile();

    appController = app.get<ProductController>(ProductController);
  });

  //describe('root', () => {
   // it('should return "Hello World!"', () => {
   //   expect(appController.getHello()).toBe('Hello World!');
  //  });
  //});
});
