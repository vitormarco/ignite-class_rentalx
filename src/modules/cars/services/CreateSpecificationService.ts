import { ISpecificationRepository } from "../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationRepository) {}

  execute({ description, name }: IRequest): void {
    const specificationsAlreadyExists =
      this.specificationsRepository.findByName(name);

    if (specificationsAlreadyExists) {
      throw new Error("Specification already exist");
    }

    this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationService };
