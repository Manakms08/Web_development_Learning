'''
print("%s is my name"%('Manak')) 
print("Manak "*5)#Prints it 5 times  
'''
#Lists
colleges = ['IIT','NIT','College of engineering']
print(colleges)#To access the entire list
print(colleges[1])#prints NIT
colleges[2]="COE"
print(colleges[2])
print(colleges)

list_2=['table','chair','fan','clothes','bottle']
list_2.append('microphone')
list_2.remove('fan')
print(list_2)
print(len(list_2))
print(max(list_2))#Coming last dictionary wise
print(min(list_2))#coming first dictionary wise
