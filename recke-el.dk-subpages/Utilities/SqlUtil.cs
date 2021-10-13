using System;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;


namespace LG.Util {
  public static class SqlUtil {


    public static object getSingleObjectResult(string sqlSelect) {
      SqlConnection conn = null;
      SqlDataReader reader = null;
      try {
        conn = GetSqlConnection();

        conn.Open();
        SqlCommand cmd = new SqlCommand(sqlSelect, conn);
        reader = cmd.ExecuteReader();
        if (reader.Read()) {
          object obj = reader.GetValue(0);
          if (obj == DBNull.Value) {
            return null;
          } else {
            return reader.GetValue(0);
          }
        } else {
          return null;
        }
      } catch (Exception ex) {
       
        return null;
      } finally {
        if (conn != null) {
          conn.Close();
        }
        if (reader != null) {
          reader.Close();
        }
      }
    }

    public static int getSingleIntResult(string sqlSelect) {
      object obj = getSingleObjectResult(sqlSelect);
      try {
        if (obj != null) {
          return (int)obj;
        } else {
          return -1;
        }
      } catch (Exception ex) {

        return -1;
      }
    }

    public static string getSingleStringResult(string sqlSelect) {
      object obj = getSingleObjectResult(sqlSelect);
      try {
        if (obj != null) {
          return (string)obj;
        } else {
          return "";
        }
      } catch (Exception ex) {
      
        return "";
      }
    }
    public static bool getSingleSBoolResult(string sqlSelect)
    {
      object obj = getSingleObjectResult(sqlSelect);
      try
      {
        if (obj != null)
        {
          return (bool)obj;
        }
        else
        {
          return false;
        }
      }
      catch (Exception ex)
      {

        return false;
      }
    }

    public static int sqlInsert(string sqlInsert) {
      return ExecuteNonQuery(sqlInsert);
    }

    public static object ExecuteScalarQuery(string sqlQuery) {
      SqlConnection conn = GetSqlConnection();
      try {
        conn.Open();
        SqlCommand cmd = new SqlCommand(sqlQuery, conn);
        return cmd.ExecuteScalar();
      } catch (Exception ex) {
        
        return null;
      } finally {
        conn.Close();
      }
    }

    public static int ExecuteNonQuery(string sqlQuery) {
      return ExecuteNonQuery(sqlQuery, false, null);
    }

    public static int ExecuteNonQuery(string sqlQuery, bool storedProcedure, SqlParameter[] parameters) {
      SqlConnection conn = GetSqlConnection();
      try {
        conn.Open();
        SqlCommand cmd = new SqlCommand(sqlQuery, conn);
        if (storedProcedure) {
          cmd.CommandType = CommandType.StoredProcedure;
          if (parameters != null) {
            cmd.Parameters.AddRange(parameters);
          }
        }
        return cmd.ExecuteNonQuery();
      } catch (Exception ex) {
      
        return 0;
      } finally {
        conn.Close();
      }
    }

    public static int sqlUpdate(string sqlUpdate) {
      return ExecuteNonQuery(sqlUpdate);
    }

    public static bool getBoolValueFromDataReader(SqlDataReader reader, string columnName) {
      try {
        return (bool)reader.GetValue(reader.GetOrdinal(columnName));
      } catch (Exception ex) {
      
        return false;
      }
    }
    public static string getStringValueFromDataReader(SqlDataReader reader, string columnName) {
      try {
        return (string)reader.GetValue(reader.GetOrdinal(columnName));
      } catch (Exception ex) {
       
        return "";
      }
    }
    public static int getIntValueFromDataReader(SqlDataReader reader, string columnName) {
      try {
        return (int)reader.GetValue(reader.GetOrdinal(columnName));
      } catch (Exception ex) {
        
        return -1;
      }
    }

    public static SqlConnection GetSqlConnection()
    {
        SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["FormularBaseConnectionString"].ConnectionString);
      return conn;
    }

  }
}
