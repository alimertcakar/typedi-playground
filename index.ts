import "reflect-metadata";
import { Container, Service } from "typedi";

@Service()
class ExampleInjectedService {
  printMessage() {
    console.log("I am alive!");
  }
}

@Service()
class ExampleService {
  constructor(public injectedService: ExampleInjectedService) {}
}

const serviceInstance = Container.get(ExampleService);
// we request an instance of ExampleService from TypeDI

serviceInstance.injectedService.printMessage();
// logs "I am alive!" to the console
