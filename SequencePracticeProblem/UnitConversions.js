
  //Problem :5  UnitConversion
{
    //given 1feet = 12 in 42 in = ? feet
    console.log("The 42 inch in feet  = " + 42 / 12);
  
    //1 sq  ft  = 0.092903 sq meters
    //Rectangular Plot of 60 feet x 40 feet in meters
    let Area-in-mtrs = 60 * 40 * 0.092903;
    console.log("Area of rectangular plot is " + 60 * 40 * 0.092903);
  
    //Calculate area of 25 such plots in acres
    let Area-of-25-plots = Area-in-mtrs * 25;
    console.log("Area of 25 plots in acres = " + Area-of-25-plots * 0.000247105);
  }