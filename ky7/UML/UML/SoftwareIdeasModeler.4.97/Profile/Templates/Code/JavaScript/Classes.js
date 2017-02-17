<%==SIM:ForEach:Diagram.Elements==%>
<%==SIM:If:Element.OfType(class)==%>
<%==SIM:ForEach:Element.DocumentationLines==%>//<%==SIM:DocumentationLine==%>
<%==SIM:EndFor==%>function <%==SIM:DElement.Name==%>
{
<%==SIM:ForEach:Element.Attributes==%>
    <%==SIM:ForEach:Attribute.DocumentationLines==%>//<%==SIM:DocumentationLine==%>
    <%==SIM:EndFor==%>this.<%==SIM:Attribute.Name==%> = <%==SIM:If:Attribute.HasDefaultValue==%><%==SIM:Attribute.DefaultValue==%><%==SIM:EndIf==%><%==SIM:IfNot:Attribute.HasDefaultValue==%>null<%==SIM:EndIf==%>;
<%==SIM:EndFor==%>

<%==SIM:ForEach:Element.Operations==%>
    <%==SIM:ForEach:Operation.DocumentationLines==%>//<%==SIM:DocumentationLine==%>
    <%==SIM:EndFor==%>this.<%==SIM:Operation.Name==%> = new function(<%==SIM:ForEach:Operation.Parameters==%> /* <%==SIM:Parameter.Type==%> */ <%==SIM:Parameter.Name==%><%==SIM:IfNot:IsLastItem==%>, <%==SIM:EndIf==%><%==SIM:EndFor==%>) 
    {
        /* Method body */
    }

<%==SIM:EndFor==%>
}

<%==SIM:If:Element.HasSuperClass==%><%==SIM:Element.Name==%>.prototype = new <%==SIM:Element.SuperClass.Name==%>();<%==SIM:EndIf==%>

<%==SIM:EndIf==%>
<%==SIM:EndFor==%>