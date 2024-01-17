# Tabs and Code

Calculating the sum of two numbers is a simple task. The following code snippet shows how to do it in different programming languages:

<tabs>
<tab title='Java'>
<code-block lang='java'>
<![CDATA[
public class Sum {
    public static void main(String[] args) {
        System.out.println(sum(1, 2));
    }

    public static int sum(int a, int b) {
        return a + b;
    }
}
]]>
</code-block>
</tab>
<tab title='C++'>
<code-block lang='c++'>
<![CDATA[
#include <iostream>

int sum(int a, int b) {
    return a + b;
}

int main() {
    std::cout << sum(1, 2) << std::endl;
}
]]>
</code-block>
</tab>
<tab title='C#'>
<code-block lang='c#'>
<![CDATA[
using System;

public class Program {
    public static void Main() {
        Console.WriteLine(Sum(1, 2));
    }

    public static int Sum(int a, int b) {
        return a + b;
    }
}
]]>
</code-block>
</tab>
</tabs>

## Very long code blocks

Make sure that very long code lines are correctly wrapped at roughly 120 characters as they will be scaled otherwise. 
The block below is an example of a very long line which will result in a code block with a very small font size.

<code-block lang='java'>
<![CDATA[
 public static <C, A extends Annotation> SerializationPrototype<C, A> createPrototypeWithInherited(Class<?> clazz, Class<A> annotationClass, Function<A, String> nameResolver) throws IllegalAccessException {
    return new SerializationPrototype<>(clazz, annotationClass, lookup, true, nameResolver);
}
]]>
</code-block>

The correctly wrapped block however will look fine:

<code-block lang='java'>
<![CDATA[
 public static <C, A extends Annotation> SerializationPrototype<C, A> createPrototypeWithInherited (
                                                                        Class<?> clazz, 
                                                                        Class<A> annotationClass, 
                                                                        Function<A, String> nameResolver ) 
                                                                        throws IllegalAccessException {

    return new SerializationPrototype<>(clazz, annotationClass, lookup, true, nameResolver);
}
]]>
</code-block>