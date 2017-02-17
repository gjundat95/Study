<%==SIM:Set:private=Private==%>
<%==SIM:Set:protected=Protected==%>
<%==SIM:Set:package=Friend==%>
<%==SIM:Set:public=Public==%>

<%==SIM:ForEach:Element.DocumentationLines==%>--<%==SIM:DocumentationLine==%> 
<%==SIM:EndFor==%>
-- <%==SIM:Element.Name==%> --------------
CREATE TABLE [<%==SIM:Element.Name==%>]
(
<%==SIM:ForEach:Element.Attributes==%>[<%==SIM:Attribute.Name==%>] [<%==SIM:Attribute.TypeName==%>] <%==SIM:If:Attribute.HasTypeLength==%>(<%==SIM:Attribute.TypeLength==%>)<%==SIM:EndIf==%> <%==SIM:If:Attribute.IsNullable==%>NULL<%==SIM:EndIf==%><%==SIM:IfNot:Attribute.IsNullable==%>NOT NULL<%==SIM:EndIf==%><%==SIM:IfNot:IsLastItem==%>,<%==SIM:EndIf==%>
<%==SIM:EndFor==%>
)
ON [PRIMARY]
GO