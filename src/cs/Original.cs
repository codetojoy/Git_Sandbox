using System.IO;
using System;

enum ConditionalThing { State_A, State_B, State_C };

interface AppropriateReturnType {
    AppropriateReturnType process(ConditionalThing state);
}

class ReturnTypeA : AppropriateReturnType {
    public AppropriateReturnType process(ConditionalThing state) {
        Console.WriteLine("TRACER A");
        return this;
    }
}

class ReturnTypeB : AppropriateReturnType {
    public AppropriateReturnType process(ConditionalThing state) {
        Console.WriteLine("TRACER B");
        return this;
    }
}

class ReturnTypeC : AppropriateReturnType {
    public AppropriateReturnType process(ConditionalThing state) {
        Console.WriteLine("TRACER C");
        return this;
    }
}

class AppropriateReturnTypeFactory {
    public static AppropriateReturnType process(ConditionalThing state) {
        AppropriateReturnType result;
            
        switch (state) {
            case ConditionalThing.State_A:
                result = new ReturnTypeA();
                break;
            case ConditionalThing.State_B:
                result = new ReturnTypeB();
                break;
            default:
                result = new ReturnTypeC();
                break;
        };
        return result.process(state);
    }
}

class ConditionalThingProcessor {
    public static AppropriateReturnType process(ConditionalThing state) {
        return AppropriateReturnTypeFactory.process(state);
    }
}

class Program {
    static void Main() {
        // using http://www.tutorialspoint.com/compile_csharp_online.php
        // this prints:
        //      Hello, World!
        //      TRACER A
        //      TRACER B
        //      TRACER C
        Console.WriteLine("Hello, World!");
        ConditionalThingProcessor.process(ConditionalThing.State_A);
        ConditionalThingProcessor.process(ConditionalThing.State_B);
        ConditionalThingProcessor.process(ConditionalThing.State_C);
    }
}

