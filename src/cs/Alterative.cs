using System.IO;
using System;
using System.Collections.Generic;

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
    Dictionary<ConditionalThing, Func<AppropriateReturnType>> registry = new Dictionary<ConditionalThing, Func<AppropriateReturnType>>();
    
    public AppropriateReturnTypeFactory() {
        registry[ConditionalThing.State_A] = () => { return new ReturnTypeA(); };     
        registry[ConditionalThing.State_B] = () => { return new ReturnTypeB(); };     
        registry[ConditionalThing.State_C] = () => { return new ReturnTypeC(); };     
    }
    
    public AppropriateReturnType process(ConditionalThing state) {
        Func<AppropriateReturnType> f = registry[state];
        AppropriateReturnType result = f();
            
        return result.process(state);
    }
}

class ConditionalThingProcessor {
    static AppropriateReturnTypeFactory factory = new AppropriateReturnTypeFactory();
    public static AppropriateReturnType process(ConditionalThing state) {
        return factory.process(state);
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

