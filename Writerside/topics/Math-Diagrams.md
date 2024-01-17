# Math &amp; Diagrams

LateX expressions will show up correctly as seen below:

<code-block lang="tex">
    \begin{equation}
    x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
    \end{equation}
</code-block>

<b>Supported diagram types:</b>
<table>
<tr>
<th>Mermaid</th>
    <th>PlantUML</th>
</tr>
<tr>
<td>
<code-block lang='mermaid'>
    graph TD;
        A-->B;
        A-->C;
        B-->D;
        C-->D;
</code-block>
</td>
<td>
<code-block lang='plantuml'>
    @startuml
    Alice -> Bob: Authentication Request
    Bob --> Alice: Authentication Response
    @enduml
</code-block>
</td>
</tr>
</table>