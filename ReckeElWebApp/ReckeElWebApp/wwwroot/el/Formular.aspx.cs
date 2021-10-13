using System;
using System.Collections;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;
using LG.Util;
using System.Net.Mail;
using System.IO;
using System.Net.Mime;



namespace WebApplication1
{
    public partial class Formular : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
          if (!IsPostBack) {


            SqlUtil.sqlInsert("insert Into Kunder (Dato, Type) VALUES ('" + DateTime.Now + "', 'En 1/8 kalv')");

            string KundeID= "" + SqlUtil.getSingleIntResult("select MAX(ID) from Kunder");

            HiddenFieldKundeID.Value = KundeID;
            
            SqlDataSource1.DataBind();

           
           
            DetailsView1.ChangeMode(DetailsViewMode.Edit);
            
            
          }
        }

       


       

        protected void ImageButton2_Click(object sender, ImageClickEventArgs e)
        {
        
          string test = ("<tbody><tr><td valign='top' style='border-top:solid #cccccc 1.0pt;border-left:none;border-bottom:solid #cccccc 1.0pt;border-right:none;background:#eeeeee;padding:2.25pt 2.25pt 2.25pt 2.25pt' colspan='2'>&nbsp;<table border='1' cellpadding='0' cellspacing='0' style='BORDER-BOTTOM: #cccccc 1pt solid; BORDER-LEFT: #cccccc 1pt solid; WIDTH: 390pt; BORDER-TOP: medium none; BORDER-RIGHT: #cccccc 1pt solid' width='520'><tr><td colspan='2' style='BORDER-BOTTOM: #cccccc 1pt solid; BORDER-LEFT: medium none; PADDING-BOTTOM: 2.25pt; PADDING-LEFT: 2.25pt; PADDING-RIGHT: 2.25pt; BACKGROUND: #eeeeee; BORDER-TOP: #cccccc 1pt solid; BORDER-RIGHT: medium none; ' valign='top'><strong><span style='FONT-FAMILY: Verdana, sans-serif; COLOR: #444444; FONT-SIZE: 8.5pt'>Solceller</span></strong></td></tr>");
          test=test+ ("<tr><td colspan='2' style=' PADDING-LEFT: 2.25pt; PADDING-RIGHT: 2.25pt; BORDER-TOP: medium none; BORDER-RIGHT: medium none; ' valign='top'><strong><span style='FONT-FAMILY: Verdana, sans-serif; COLOR: #444444; FONT-SIZE: 8.5pt'>Forespørgsel på:</span></strong></td></tr>");
      
          test = test + trBilderStringValue("Kunder", HiddenFieldKundeID.Value, "Andelsstørelse:", "Type", "");
      
          test = test + HR();
          test = test + hedder("Kunde oplysninger:");
          test = test + trBilderStringValue("Kunder", HiddenFieldKundeID.Value, "Navn:", "Navn", "");
          test = test + trBilderStringValue("Kunder", HiddenFieldKundeID.Value, "Adresse:", "Adresse", "");
          test = test + trBilderStringValue("Kunder", HiddenFieldKundeID.Value, "Post nr:", "Postnr", "");
          test = test + trBilderStringValue("Kunder", HiddenFieldKundeID.Value, "By:", "[By]", "");
          test = test + trBilderStringValue("Kunder", HiddenFieldKundeID.Value, "Telefon:", "Telefon", "");
          test = test + trBilderStringValue("Kunder", HiddenFieldKundeID.Value, "email:", "email", "");
          
          test=test+ ("  </table><pre><span style='COLOR: #444444'>&nbsp;</span></pre></td></tr></tbody>");
          // XmlDataSource1.
          //+ "  <br/>Adresse: " + DetailsView1.Rows[2].Cells[2].Text + "  <br/>Postnr: " + DetailsView1.Rows[3].Cells[2].Text)


          EmbedImages(test, HiddenFieldKundeID.Value);
          SendImageButton.ImageUrl = "images/dataSendt.gif";
          //SendMail("lars@itsignatur.dk",test);
        }

        public string trBilderStringValue(string table, string ID, string Text, string valueID, string Enhed)
        {
          return ("<tr><td style=' PADDING-LEFT: 2.25pt; WIDTH: 225pt; PADDING-RIGHT: 2.25pt; BORDER-TOP: medium none; BORDER-RIGHT: medium none; ' valign='top' width='300'><span style='FONT-FAMILY: Verdana,sans-serif; COLOR: #444444; FONT-SIZE: 8.5pt'>" + Text + "</span></td><td style=' PADDING-LEFT: 2.25pt; WIDTH: 165pt; PADDING-RIGHT: 2.25pt; BORDER-TOP: medium none; BORDER-RIGHT: medium none; ' width='220'><span style='FONT-FAMILY: Verdana,sans-serif; COLOR: #444444; FONT-SIZE: 8.5pt'>" + getStringValue(table, valueID, ID) + Enhed + "</span></td></tr>");
        }
        public string trBilderIntValue(string table, string ID, string Text, string valueID, string Enhed)
        {
          return ("<tr><td style=' PADDING-LEFT: 2.25pt; WIDTH: 225pt; PADDING-RIGHT: 2.25pt; BORDER-TOP: medium none; BORDER-RIGHT: medium none; ' valign='top' width='300'><span style='FONT-FAMILY: Verdana,sans-serif; COLOR: #444444; FONT-SIZE: 8.5pt'>" + Text + "</span></td><td style=' PADDING-LEFT: 2.25pt; WIDTH: 165pt; PADDING-RIGHT: 2.25pt; BORDER-TOP: medium none; BORDER-RIGHT: medium none; ' width='220'><span style='FONT-FAMILY: Verdana,sans-serif; COLOR: #444444; FONT-SIZE: 8.5pt'>" + getIntValue(table, valueID, ID) + Enhed + "</span></td></tr>");
        }
        public string trBilderBoolValue(string table, string ID, string Text, string valueID, string Enhed)
        {
          return ("<tr><td style=' PADDING-LEFT: 2.25pt; WIDTH: 225pt; PADDING-RIGHT: 2.25pt; BORDER-TOP: medium none; BORDER-RIGHT: medium none; ' valign='top' width='300'><span style='FONT-FAMILY: Verdana,sans-serif; COLOR: #444444; FONT-SIZE: 8.5pt'>" + Text + "</span></td><td style=' PADDING-LEFT: 2.25pt; WIDTH: 165pt; PADDING-RIGHT: 2.25pt; BORDER-TOP: medium none; BORDER-RIGHT: medium none; ' width='220'><span style='FONT-FAMILY: Verdana,sans-serif; COLOR: #444444; FONT-SIZE: 8.5pt'>" + getBoolValue(table, valueID, ID) + Enhed + "</span></td></tr>");
        }
        public string HR (){

          return "<tr><td colspan='2' style=' PADDING-LEFT: 2.25pt; PADDING-RIGHT: 2.25pt; BORDER-TOP: medium none; BORDER-RIGHT: medium none; ' valign='top'><div align='center' class='MsoNormal' style='TEXT-ALIGN: center'><hr align='center' size='1' width='100%' /></div></td></tr>";
        
        }
        public string hedder(string value) {
            return "<tr><td colspan='2' style='BORDER-BOTTOM: #cccccc 1pt solid; BORDER-LEFT: medium none; PADDING-BOTTOM: 2.25pt; PADDING-LEFT: 2.25pt; PADDING-RIGHT: 2.25pt; BACKGROUND: #eeeeee; BORDER-TOP: #cccccc 1pt solid; BORDER-RIGHT: medium none; ' valign='top'><strong><span style='FONT-FAMILY: Verdana,sans-serif; COLOR: #444444; FONT-SIZE: 8.5pt'>"+value+"</span></strong></td></tr>";
        }

         public int getIntValue(string table, String ID, String value) {
            return SqlUtil.getSingleIntResult("select " + ID + " from "+ table +" where ID =" + value);
         }
         public string getStringValue(string table, String ID, String value)
         {
           return SqlUtil.getSingleStringResult("select " + ID + " from  " + table + " where ID =" + value);
         }
         public string getBoolValue(string table, String ID, String value)
         {
           if (SqlUtil.getSingleSBoolResult("select " + ID + " from  " + table + "  where ID =" + value))
           {
                return "Ja Tak";}
            else{return "Nej tak";}
         }
          

       
        

        

        public void EmbedImages(string test, String KundeID )
        {
            string path = Server.MapPath("~/");
            string mailServerName = "mail.itsignatur.dk";
            MailMessage mail = new MailMessage();
            System.Net.NetworkCredential auth = new System.Net.NetworkCredential("lars@itsignatur.dk", "S0laris");

            mail.From = new MailAddress("lars@itsignatur.dk");
            //mail.To.Add("lars@itsignatur.dk");
            String test3 = SqlUtil.getSingleStringResult("Select Email_Formular From forhandlere where Kode=" + HiddenFieldKode.Value);
          mail.To.Add(test3);  
          //mail.To.Add("lars@itsignatur.dk");
            mail.Bcc.Add("Lars@itsignatur.dk");
            //mail.Bcc.Add("andreas@solaropti.dk");
            mail.Subject = "forespørgsel på solcelle anlæg";
          AlternateView plainView = AlternateView.CreateAlternateViewFromString("Du har fået en forespørgelse på solceller fra din solcelleformular, men din mailklient kan ikke modtage denne, prøv at åbne denne mail på en anden computer for at læse indholdet, eller kontakt IT-Signatur på 29934488", null, "text/plain");
           
              Object[] image = new Object[10];
           
            int nnr = 1;
           
               AlternateView htmlView = AlternateView.CreateAlternateViewFromString(test, null, "text/html");
           

            nnr = 1;

           

           

           
            
            
            //add the views
            mail.AlternateViews.Add(plainView);
            mail.AlternateViews.Add(htmlView);


            //send the message
            SmtpClient mailClient = new SmtpClient();

            mailClient.Host = mailServerName;
            mailClient.Credentials = auth;
            mailClient.Send(mail);

            // Label5.Text = "Mailen er sendt";
            mail.Dispose();
            
            
        }

       

        




       
    }   
}
