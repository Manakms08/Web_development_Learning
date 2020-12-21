#File IO
#Writing
file1=open("manak.txt","wb")
print(file1.mode)
print(file1.name)
file1.write(bytes("Write this text to my file"))
file1.close();
#Reading
file1=('man.txt','r+')
text_to_read = file1.read
print(text_to_read)