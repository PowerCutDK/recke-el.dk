<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Formular.aspx.cs" Inherits="WebApplication1.Formular" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>



<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head id="Head1" runat="server">
    
    <script src="/js/jquery.min.js" type="text/javascript"></script>
    <script src="/js/jquery-ui.min.js" type="text/javascript"></script>

    
    

    <title>Untitled Page</title>
</head>
<body>
    <form id="form1" runat="server">
    <asp:ScriptManager ID="ScriptManager1" runat="server">
    </asp:ScriptManager>
    <div id="test2">

        <asp:UpdatePanel ID="UpdatePanel2" runat="server" >
        <ContentTemplate>
        <asp:DetailsView ID="DetailsView1" runat="server"  AutoGenerateRows="False" 
            DataKeyNames="ID" DataSourceID="SqlDataSource1" 
            Width="550px" BackColor="Transparent"  
            BorderWidth="0px" CellPadding="3" ForeColor="Black" GridLines="Vertical" 
            BackImageUrl="~/images/bestilEL.png" 
            HeaderText="BESTIL SOLCELLE TILBUD HER!">
            <FooterStyle BackColor="#CCCCCC" />
            <CommandRowStyle BackColor="Transparent" />
            <PagerStyle BackColor="#999999" ForeColor="Black" HorizontalAlign="Center" />
            <Fields>
            
                <asp:BoundField DataField="ID" HeaderText="ID" InsertVisible="False" 
                    ReadOnly="True" SortExpression="ID" >
                    <ControlStyle CssClass="notVisable" />
                    <HeaderStyle CssClass="notVisable" />
                    <ItemStyle CssClass="notVisable" />
                </asp:BoundField>
                <asp:BoundField DataField="Kode" HeaderText="Kode" SortExpression="Kode" >
                    <ControlStyle CssClass="notVisable" />
                    <HeaderStyle CssClass="notVisable" />
                    <ItemStyle CssClass="notVisable" />
                </asp:BoundField>
                <asp:TemplateField HeaderText="Skriv dit navn her." SortExpression="Navn">
                    <EditItemTemplate>
                        <asp:TextBox ID="TextBoxNavn" CssClass="felter" runat="server" Text='<%# Bind("Navn") %>'></asp:TextBox>
                        <asp:RequiredFieldValidator ID="RequiredFieldValidator1" ControlToValidate="TextBoxNavn" runat="server" 
                        Display="None"
                            ErrorMessage="<b>Dette felt skal udfyldes</b><br />Skriv dit navn her." ></asp:RequiredFieldValidator>
                        <cc1:ValidatorCalloutExtender ID="ValidatorCalloutExtender1" TargetControlID="RequiredFieldValidator1" runat="server">
                        </cc1:ValidatorCalloutExtender>
                    </EditItemTemplate>
                    <InsertItemTemplate>
                        <asp:TextBox ID="TextBox1"  runat="server" Text='<%# Bind("Navn") %>'></asp:TextBox>
                    </InsertItemTemplate>
                    <ItemTemplate>
                        <asp:Label ID="Label1" runat="server" Text='<%# Bind("Navn") %>'></asp:Label>
                    </ItemTemplate>
                </asp:TemplateField>
                <asp:TemplateField HeaderText="Adresse." SortExpression="Adresse">
                    <EditItemTemplate>
                        <asp:TextBox ID="TextBox2" CssClass="felter" runat="server" Text='<%# Bind("Adresse") %>'></asp:TextBox>
                         <asp:RequiredFieldValidator ID="RequiredFieldValidator2" ControlToValidate="TextBox2" runat="server" 
                        Display="None"
                            ErrorMessage="<b>Dette felt skal udfyldes</b><br />Skriv din adresse her." ></asp:RequiredFieldValidator>
                        <cc1:ValidatorCalloutExtender ID="ValidatorCalloutExtender2" TargetControlID="RequiredFieldValidator2" runat="server">
                        </cc1:ValidatorCalloutExtender>
                    </EditItemTemplate>
                    <InsertItemTemplate>
                        <asp:TextBox ID="TextBox2" runat="server" Text='<%# Bind("Adresse") %>'></asp:TextBox>
                    </InsertItemTemplate>
                    <ItemTemplate>
                        <asp:Label ID="Label2" runat="server" Text='<%# Bind("Adresse") %>'></asp:Label>
                    </ItemTemplate>
                </asp:TemplateField>
                <asp:TemplateField HeaderText="Postnr." SortExpression="Postnr">
                    <EditItemTemplate>
                        <asp:TextBox ID="TextBox3" CssClass="felter" runat="server" Text='<%# Bind("Postnr") %>'></asp:TextBox>
                          <asp:RequiredFieldValidator ID="RequiredFieldValidator3" ControlToValidate="TextBox3" runat="server" 
                        Display="None"
                            ErrorMessage="<b>Dette felt skal udfyldes</b><br />Skriv dit postnr her." ></asp:RequiredFieldValidator>
                        <cc1:ValidatorCalloutExtender ID="ValidatorCalloutExtender3" TargetControlID="RequiredFieldValidator3" runat="server">
                        </cc1:ValidatorCalloutExtender>
                    </EditItemTemplate>
                    <InsertItemTemplate>
                        <asp:TextBox ID="TextBox3" runat="server" Text='<%# Bind("Postnr") %>'></asp:TextBox>
                    </InsertItemTemplate>
                    <ItemTemplate>
                        <asp:Label ID="Label3" runat="server" Text='<%# Bind("Postnr") %>'></asp:Label>
                    </ItemTemplate>
                </asp:TemplateField>
                <asp:TemplateField HeaderText="By." SortExpression="By">
                    <EditItemTemplate>
                        <asp:TextBox ID="TextBox4" CssClass="felter" runat="server" Text='<%# Bind("By") %>'></asp:TextBox>
                          <asp:RequiredFieldValidator ID="RequiredFieldValidator4" ControlToValidate="TextBox4" runat="server" 
                        Display="None"
                            ErrorMessage="<b>Dette felt skal udfyldes</b><br />Skriv navnet på den by du bor i her." ></asp:RequiredFieldValidator>
                        <cc1:ValidatorCalloutExtender ID="ValidatorCalloutExtender4" TargetControlID="RequiredFieldValidator4" runat="server">
                        </cc1:ValidatorCalloutExtender>
                    </EditItemTemplate>
                    <InsertItemTemplate>
                        <asp:TextBox ID="TextBox4" runat="server" Text='<%# Bind("By") %>'></asp:TextBox>
                    </InsertItemTemplate>
                    <ItemTemplate>
                        <asp:Label ID="Label4" runat="server" Text='<%# Bind("By") %>'></asp:Label>
                    </ItemTemplate>
                </asp:TemplateField>
                <asp:TemplateField HeaderText="email" SortExpression="email">
                    <EditItemTemplate>
                        <asp:TextBox ID="TextBox5" CssClass="felter" runat="server" Text='<%# Bind("email") %>'></asp:TextBox>
                          <asp:RequiredFieldValidator ID="RequiredFieldValidator5" ControlToValidate="TextBox5" runat="server" 
                        Display="None"
                            ErrorMessage="<b>Dette felt skal udfyldes</b><br />Skriv din email adresse her." ></asp:RequiredFieldValidator>
                        <cc1:ValidatorCalloutExtender ID="ValidatorCalloutExtender5" TargetControlID="RequiredFieldValidator5" runat="server">
                        </cc1:ValidatorCalloutExtender>
                    </EditItemTemplate>
                    <InsertItemTemplate>
                        <asp:TextBox ID="TextBox5" runat="server" Text='<%# Bind("email") %>'></asp:TextBox>
                    </InsertItemTemplate>
                    <ItemTemplate>
                        <asp:Label ID="Label5" runat="server" Text='<%# Bind("email") %>'></asp:Label>
                    </ItemTemplate>
                </asp:TemplateField>
                <asp:TemplateField HeaderText="Telefon" SortExpression="Telefon">
                    <EditItemTemplate>
                        <asp:TextBox ID="TextBox6" CssClass="felter" runat="server" Text='<%# Bind("Telefon") %>'></asp:TextBox>
                          <asp:RequiredFieldValidator ID="RequiredFieldValidator6" ControlToValidate="TextBox6" runat="server" 
                        Display="None"
                            ErrorMessage="<b>Dette felt skal udfyldes</b><br />Skriv dit telefon nummer her." ></asp:RequiredFieldValidator>
                        <cc1:ValidatorCalloutExtender ID="ValidatorCalloutExtender6" TargetControlID="RequiredFieldValidator6" runat="server">
                        </cc1:ValidatorCalloutExtender>
                    </EditItemTemplate>
                    <InsertItemTemplate>
                        <asp:TextBox ID="TextBox6" runat="server" Text='<%# Bind("Telefon") %>'></asp:TextBox>
                    </InsertItemTemplate>
                    <ItemTemplate>
                        <asp:Label ID="Label6" runat="server" Text='<%# Bind("Telefon") %>'></asp:Label>
                    </ItemTemplate>
                </asp:TemplateField>
                <asp:TemplateField></asp:TemplateField>
                
                <asp:TemplateField HeaderText="Andelsstørelse" SortExpression="Type">
                    <EditItemTemplate>
                        <asp:DropDownList ID="DropDownList11" CssClass="dropdown" runat="server" 
                            DataSourceID="SqlDataSourceType" DataTextField="Type" DataValueField="Type" 
                            SelectedValue='<%# Bind("Type") %>'>
                        </asp:DropDownList>
                        <asp:SqlDataSource ID="SqlDataSourceType" runat="server" 
                            ConnectionString="<%$ ConnectionStrings:FormularBaseConnectionString %>" 
                            SelectCommand="SELECT [Type] FROM [Type]"></asp:SqlDataSource>
                        
                    </EditItemTemplate>
                    <InsertItemTemplate>
                        <asp:TextBox ID="TextBox8" runat="server" Text='<%# Bind("Type") %>'></asp:TextBox>
                    </InsertItemTemplate>
                    <ItemTemplate>
                        <asp:Label ID="Label8" runat="server" Text='<%# Bind("Type") %>'></asp:Label>
                    </ItemTemplate>
                </asp:TemplateField>
              
                
               
                <asp:BoundField DataField="Dato" HeaderText="Dato" SortExpression="Dato" >
                    <ControlStyle CssClass="notVisable" />
                    <HeaderStyle CssClass="notVisable" />
                    <ItemStyle CssClass="notVisable" />
                </asp:BoundField>
                <asp:TemplateField ShowHeader="False">
                    <EditItemTemplate>
                        <asp:LinkButton ID="UpdateButton" CssClass="UpdateButton" runat="server" CausesValidation="True" 
                            CommandName="Update" Text="Gem data"></asp:LinkButton>
                        &nbsp;
                    </EditItemTemplate>
                    <ItemTemplate>
                        <asp:LinkButton ID="UpdateButton" runat="server" CausesValidation="False" 
                            CommandName="Edit" Text="Edit"></asp:LinkButton>
                    </ItemTemplate>
                </asp:TemplateField>
            </Fields>
            <HeaderStyle BackColor="Transparent" Font-Bold="True" ForeColor="White" 
                Font-Names="Arial" Font-Overline="False" Font-Size="30px" Font-Underline="True" 
                Height="62px" HorizontalAlign="Center" />
            <EditRowStyle BackColor="Transparent" Font-Bold="True" ForeColor="White" />
            <AlternatingRowStyle BackColor="Transparent" />
        </asp:DetailsView>
        </ContentTemplate>
        
        
        </asp:UpdatePanel>
        
        
        
       
      
        <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
            ConnectionString="<%$ ConnectionStrings:FormularBaseConnectionString %>" 
            ProviderName="<%$ ConnectionStrings:FormularBaseConnectionString.ProviderName %>" 
            
            SelectCommand="SELECT [ID], [Kode], [Forhandler], [Navn], [Adresse], [Postnr], [By], [email], [Telefon], [Dato], [Type] FROM [Kunder]">
        </asp:SqlDataSource>
        <br />
        <asp:HiddenField ID="HiddenFieldKode" runat="server" Value="1223345" />
        <asp:HiddenField ID="HiddenFieldKundeID" runat="server" />
      
        
      <div id="send"  style="position:relative; ">
          <asp:UpdatePanel ID="UpdatePanel1" runat="server" RenderMode="Inline" 
              UpdateMode="Conditional">
         
               <ContentTemplate>
                <asp:ImageButton ID="SendImageButton"   runat="server" 
               onclick="ImageButton2_Click" CssClass="notsent notsawed"  ImageUrl="~/images/Send-Knap.gif" 
               Width="488px" />
               </ContentTemplate>
               <Triggers>
               
                   <asp:AsyncPostBackTrigger ControlID="SendImageButton" EventName="Click" />
               
               </Triggers>
          </asp:UpdatePanel>
           
      </div>  
    </div>
    </form>
</body>
</html>
