class Component {
    operation() {
        return 'Component operation';
    }
}

class ConcreteComponent extends Component {
    operation() {
        return 'ConcreteComponent operation';
    }
}

class Decorator extends Component {
    constructor(component) {
        super();
        this.component = component;
    }

    operation() {
        return this.component.operation();
    }
}

class ConcreteDecorator extends Decorator {
    operation() {
        return super.operation() + ', decorated';
    }

    additionalMethod() {
        return 'Additional method in ConcreteDecorator';
    }
}

// Usage
const component = new ConcreteComponent();
console.log(component.operation()); // ConcreteComponent operation

const decoratedComponent = new ConcreteDecorator(component);
console.log(decoratedComponent.operation()); // ConcreteComponent operation, decorated
console.log(decoratedComponent.additionalMethod()); // Additional method in ConcreteDecorator