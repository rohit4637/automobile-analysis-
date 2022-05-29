from flask import Flask, request,send_file, render_template,jsonify,redirect
from flask_cors import CORS,cross_origin
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns 
from io import BytesIO

col_list=["Make","Model","Variant","Ex-Showroom_Price","Displacement","Cylinders","Fuel_Tank_Capacity","Fuel_Type","Boot_Space","Seating_Capacity","Kerb_Weight","City_Mileage","Gears","Body_Type","Drivetrain"]
df=pd.read_csv("cars_engage_2022.csv", usecols=col_list)
#print(df.head())
print(df.isnull().sum())

df["Make"]=df["Make"].fillna(df['Model'].apply(lambda x : x.split(' ')[0]))
df["Make"]=df["Make"].replace('Go+','Datsun')
df["Make"]=df["Make"].replace('Maruti Suzuki R','Maruti Suzuki')
df["Make"]=df["Make"].replace('Land Rover Rover','Land Rover')

print(df.Make.unique())

df['Cylinders']=df['Cylinders'].fillna(df['Cylinders'].mean())
df['Cylinders']=df['Cylinders'].round(0).astype(int)
df["Gears"]=df["Gears"].replace('Single Speed Reduction Gear',1)
df['Gears']=df['Gears'].str.split(' ').str.get(0).astype(float)
df['Gears']=df['Gears'].fillna(df['Gears'].mean())
df['Gears']=df['Gears'].round(0).astype(int)
df['Seating_Capacity']=df['Seating_Capacity'].fillna(df['Seating_Capacity'].mean())
df['Seating_Capacity']=df['Seating_Capacity'].round(0).astype(int)

df['Displacement']=df['Displacement'].str.split(' ').str.get(0).astype(float)
df['Fuel_Tank_Capacity']=df['Fuel_Tank_Capacity'].str.split(' ').str.get(0).astype(float)
df['City_Mileage']=df['City_Mileage'].str.extract('(\d+)')
df['City_Mileage']=df['City_Mileage'].str.split(' ').str.get(0).astype(float)
df['Ex-Showroom_Price'] = df['Ex-Showroom_Price'].str.replace(',', '').str.replace('Rs.', '').astype(int)

df["Gears"]=df["Gears"].replace('Single Speed Reduction Gear',1)
df["Boot_Space"]=df["Boot_Space"].replace('209(All3RowsUp).550(3rdRowFolded)&803(2ndRowand3rdRowFolded) litres','1 litres')
df['Boot_Space']=df['Boot_Space'].str.split(' ').str.get(0).astype(float)
df['Kerb_Weight']=df['Kerb_Weight'].str.extract('(\d+)').astype(float)
# rename the columns
df=df.rename(columns = {'Displacement':'Displacement(in CC)'})
df=df.rename(columns = {'Fuel_Tank_Capacity':'Fuel_Tank_Capacity(in litres)'})
df=df.rename(columns = {'City_Mileage':'City_Mileage(Km/litre)'})
df=df.rename(columns = {'Kerb_Weight':'Kerb_Weight(in Kg)'})
df=df.rename(columns = {'Boot_Space':'Boot_Space(in litres)'})
df=df.rename(columns={'Ex-Showroom_Price':'Ex-Showroom_Price(in Rs)'})

df['Displacement(in CC)']=df['Displacement(in CC)'].fillna(df['Displacement(in CC)'].mode()[0])
df['Fuel_Tank_Capacity(in litres)']=df['Fuel_Tank_Capacity(in litres)'].fillna(df['Fuel_Tank_Capacity(in litres)'].mode()[0])
df['City_Mileage(Km/litre)'] = df.groupby('Make')['City_Mileage(Km/litre)'].apply(lambda x: x.fillna(x.mean()))
df['City_Mileage(Km/litre)']=df['City_Mileage(Km/litre)'].fillna(df['City_Mileage(Km/litre)'].mode()[0])
df=df.round({'City_Mileage(Km/litre)': 1})
df['Kerb_Weight(in Kg)']=df['Kerb_Weight(in Kg)'].fillna(df['Kerb_Weight(in Kg)'].mean())
df['Boot_Space(in litres)']=df['Boot_Space(in litres)'].fillna(df['Boot_Space(in litres)'].mean())
df['Body_Type']=df['Body_Type'].fillna(df['Body_Type'].mode()[0])
df['Drivetrain']=df['Drivetrain'].fillna(df['Drivetrain'].mode()[0])

print(df.isnull().sum())
print(df.info())
print(df.head())

app = Flask(__name__)
CORS(app)
cors=CORS(app,resources={
     r"/*":{
         "origins":"http://localhost:3000" 
     }
})

@app.route("/helloworld",methods=['GET','POST'])
def hello_world():
    return ("my name is rohit")

@app.route("/dataset",methods=['GET','POST'])
def dataset():
    temp=df["Make"].value_counts()
    return f'{temp}'


@app.route("/array_post",methods=['GET','POST'])
def array_post():
  dt=df['Make'].value_counts().reset_index()
  team1=dt['index'].tolist()
  team2=dt['Make'].tolist()
  return (jsonify(team1,f'{team2}'))

# @app.route("/price_distr_plot",methods=['GET','POST'])
# def price_distr_plot():
#   plt.subplot(1,2,1)
#   plt.title('Car Price Distribution Plot')
#   sns.distplot(df['Ex-Showroom_Price(in Rs)'])
#   plt.show()
#   plt.title('Car Price Spread')
#   sns.boxplot(y=df['Ex-Showroom_Price(in Rs)'])
#   plt.show()
#   return redirect("http://localhost:3000/Full_Analysis")

# @app.route("/corr_plot",methods=['GET','POST'])
# def corr_plot():
#   plt.figure(figsize=(15,13))
#   sns.heatmap(df.corr(),annot=True)
#   plt.show()
#   return redirect("http://localhost:3000/Full_Analysis")
  


# @app.route("/bar_chart",methods=['GET','POST'])
# def bar_chart():
#   if request.method=="GET":
#     dt=df['Make'].value_counts().reset_index()
#     team1=dt['index'].tolist()
#     team2=dt['Make'].tolist()
#     return (jsonify(team1,f'{team2}')) 
#   else:
#     return ("rohit")  

@app.route("/bar_price_chart",methods=['GET','POST'])
def bar_price_chart():
  dt=df['Ex-Showroom_Price(in Rs)'].value_counts().reset_index()  #request is removed
  dt=dt.sort_values(by="index",ascending=True)  
  team1=dt['index'].tolist()
  team2=dt['Ex-Showroom_Price(in Rs)'].tolist()
  return (jsonify(team1,team2))

@app.route("/scatter_plot",methods=['GET','POST'])
def scatter_plot():
  data=request.get_json()
  col_1=data['col_1_name']
  col_2=data['col_2_name']
  Data=df[[col_1,col_2]].to_numpy().tolist()
  return (jsonify(Data))

# @app.route('/index' ,methods=['GET', 'POST'])
# def show_index():
#     full_filename=df['Make'].value_counts().plot(kind='bar')
#     #plt.show()
#     return render_template("index.html")

@app.route("/bar_make_freq_chart",methods=['GET','POST'])
def bar_make_freq_chart():
  dt=df['Make'].value_counts().reset_index()
  team1=dt['index'].tolist()
  team2=dt['Make'].tolist()
  return (jsonify(team1,f'{team2}'))

@app.route("/make_percnt",methods=['GET','POST'])
def make_percnt():
  dt=df['Make'].value_counts().reset_index()
  sum1=dt['Make'].sum()
  dt['Make']=(dt['Make']/sum1)*100
  tt=max(dt['Make'].to_numpy())
  tt=round(tt,2)
  return (jsonify(tt))

@app.route("/bar_bodytype_chart",methods=['GET','POST'])
def bar_bodytype_chart():
  dt1=df['Body_Type'].value_counts().reset_index()
  team1=dt1['index'].tolist()
  team2=dt1['Body_Type'].tolist()
  return (jsonify(team1,f'{team2}'))

@app.route("/bar_fueltype_chart",methods=['GET','POST'])
def bar_chart():
  dt=df['Fuel_Type'].value_counts().reset_index()    #request is removed from here
  team1=dt['index'].tolist()
  team2=dt['Fuel_Type'].tolist()
  return (jsonify(team1,f'{team2}'))

@app.route("/do_seating_chart",methods=['GET','POST'])
def do_seating_chart():
  dt=df['Seating_Capacity'].value_counts().reset_index()    #request is removed from here
  team1=dt['index'].tolist()
  team2=dt['Seating_Capacity'].tolist()
  return (jsonify(team1,f'{team2}'))

@app.route("/bar_displacement_chart",methods=['GET','POST'])
def bar_displacement_chart():
  dt=df['Displacement(in CC)'].value_counts().reset_index()  #request is removed
  dt=dt.sort_values(by="index",ascending=True)  
  team1=dt['index'].tolist()
  team2=dt['Displacement(in CC)'].tolist()
  return (jsonify(team1,team2))

@app.route("/do_Cylinders_chart",methods=['GET','POST'])
def do_Cylinders_chart():
  dt=df['Cylinders'].value_counts().reset_index()  #request is removed
  dt=dt.sort_values(by="index",ascending=True)  
  team1=dt['index'].tolist()
  team2=dt['Cylinders'].tolist()
  return (jsonify(team1,team2))

@app.route("/do_Gears_chart",methods=['GET','POST'])
def do_Gears_chart():
  dt=df['Gears'].value_counts().reset_index()  #request is removed
  dt=dt.sort_values(by="index",ascending=True)  
  team1=dt['index'].tolist()
  team2=dt['Gears'].tolist()
  return (jsonify(team1,team2))

@app.route("/bar_City_Mileage_chart",methods=['GET','POST'])
def bar_City_Mileage_chart():
  dt=df['City_Mileage(Km/litre)'].value_counts().reset_index()  #request is removed
  dt=dt.sort_values(by="index",ascending=True)  
  team1=dt['index'].tolist()
  team2=dt['City_Mileage(Km/litre)'].tolist()
  return (jsonify(team1,team2))

@app.route("/make_avg_price",methods=['GET','POST'])
def make_avg_price():  
  dp= pd.DataFrame(df.groupby(['Make'])['Ex-Showroom_Price(in Rs)'].mean().sort_values(ascending = False)).reset_index()
  team1=dp['Make'].tolist()
  team2=dp['Ex-Showroom_Price(in Rs)'].tolist()
  return (jsonify(team1,team2))

@app.route("/cartype_avg_price",methods=['GET','POST'])
def cartype_avg_price():  
  dp= pd.DataFrame(df.groupby(['Body_Type'])['Ex-Showroom_Price(in Rs)'].mean().sort_values(ascending = False)).reset_index()
  team1=dp['Body_Type'].tolist()
  team2=dp['Ex-Showroom_Price(in Rs)'].tolist()
  return (jsonify(team1,team2))

@app.route("/fuel_avg_price",methods=['GET','POST'])
def fuel_avg_price():  
  dp= pd.DataFrame(df.groupby(['Fuel_Type'])['Ex-Showroom_Price(in Rs)'].mean().sort_values(ascending = False)).reset_index()
  team1=dp['Fuel_Type'].tolist()
  team2=dp['Ex-Showroom_Price(in Rs)'].tolist()
  return (jsonify(team1,team2))

@app.route("/Seating_Capacity",methods=['GET','POST'])
def Seating_Capacity():  
  dp=df['Seating_Capacity'].value_counts().reset_index()
  team1=dp['index'].tolist()
  team2=dp['Seating_Capacity'].tolist()
  return (jsonify(team1,team2))

@app.route("/Seating_avg_price",methods=['GET','POST'])
def Seating_avg_price():  
  dp= pd.DataFrame(df.groupby(['Seating_Capacity'])['Ex-Showroom_Price(in Rs)'].mean().sort_values(ascending = False)).reset_index()
  team1=dp['Seating_Capacity'].tolist()
  team2=dp['Ex-Showroom_Price(in Rs)'].tolist()
  return (jsonify(team1,team2))

@app.route("/pi_Drivetrain_chart",methods=['GET','POST'])
def pi_Drivetrain_chart():
  dt=df['Drivetrain'].value_counts().reset_index()
  team1=dt['index'].tolist()
  team2=dt['Drivetrain'].tolist()
  return (jsonify(team1,f'{team2}'))

@app.route("/make_avg_kerb",methods=['GET','POST'])
def make_avg_kerb():  
  dp= pd.DataFrame(df.groupby(['Make'])['Kerb_Weight(in Kg)'].mean().sort_values(ascending = False)).reset_index()
  team1=dp['Make'].tolist()
  team2=dp['Kerb_Weight(in Kg)'].tolist()
  return (jsonify(team1,team2))

@app.route("/make_mod_mileage",methods=['GET','POST'])
def make_mod_mileage():  
  dp= pd.DataFrame(df.groupby(['Make'])['City_Mileage(Km/litre)'].mean().sort_values(ascending = False)).reset_index()
  # dp=df.groupby(['Make'])['City_Mileage(Km/litre)'].agg(pd.Series.mode).to_frame()
  team1=dp['Make'].tolist()
  team2=dp['City_Mileage(Km/litre)'].tolist()
  return (jsonify(team1,team2))

@app.route("/fuel_avg_mileage",methods=['GET','POST'])
def fuel_avg_mileage():  
  dp= pd.DataFrame(df.groupby(['Fuel_Type'])['City_Mileage(Km/litre)'].mean().sort_values(ascending = False)).reset_index()
  # dp=df.groupby(['Make'])['City_Mileage(Km/litre)'].agg(pd.Series.mode).to_frame()
  team1=dp['Fuel_Type'].tolist()
  team2=dp['City_Mileage(Km/litre)'].tolist()
  return (jsonify(team1,team2))


@app.route("/stacked_avg_cartype",methods=['GET','POST'])
def stacked_avg_cartype():  
  dp= pd.DataFrame(df.groupby(['Body_Type'])['Cylinders'].mean()).reset_index()
  dp1= pd.DataFrame(df.groupby(['Body_Type'])['Gears'].mean()).reset_index()
  dp2= pd.DataFrame(df.groupby(['Body_Type'])['Seating_Capacity'].mean()).reset_index()
  dp=dp.astype({'Cylinders':'int'})
  dp1=dp1.astype({'Gears':'int'})
  dp2=dp2.astype({'Seating_Capacity':'int'})
  team1=dp['Body_Type'].tolist()
  team2=dp['Cylinders'].tolist()
  team3=dp1['Gears'].tolist()
  team4=dp2['Seating_Capacity'].tolist()
  return (jsonify(team1,team2,team3,team4))




if __name__=="__main__":
    app.run(debug=True,port=8000)