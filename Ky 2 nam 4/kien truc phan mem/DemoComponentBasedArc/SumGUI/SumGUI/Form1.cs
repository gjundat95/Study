using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace SumGUI
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }
        SumCom.SumCom sumObj = new SumCom.SumCom();

        private void btnSum_Click(object sender, EventArgs e)
        {
            int a = Convert.ToInt16(txta.Text );
            int b= Convert.ToInt16(txtb.Text);
            
            txtResult.Text = sumObj.Sum(a,b).ToString();


        }

        private void btnMinus_Click(object sender, EventArgs e)
        {
            int a = Convert.ToInt16(txta.Text);
            int b = Convert.ToInt16(txtb.Text);
            txtResult.Text = sumObj.Minus(a, b).ToString();
        }
    }
}
