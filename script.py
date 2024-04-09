from gpiozero import LED
from time import sleep
import os
import numpy as np
import matplotlib.pyplot as plt
import sys


# led=LED(2)

# led.on()
# sleep(5)
# os.system("v4l2-ctl -d /dev/video0 --set-fmt-video=width=3088,height=2064,pixelformat='Y12 ' --stream-mmap --stream-count=1 --stream-to=sample.raw")
#led.off()

path1 = "/home/paolospoto/Desktop/MOF-sensor/sample1.raw"
path2 = "/home/paolospoto/Desktop/MOF-sensor/sample2.raw"
path3 = "/home/paolospoto/Desktop/MOF-sensor/sample3.raw"

if len(sys.argv) < 2:
     print("Usage: python script.py <counter>")
     sys.exit(1)

if (sys.argv[1] == "1"):
     path = path1
elif (sys.argv[1] == "2"):
     path = path2
else:
     path = path3

fd = open(path, 'rb')
rows = 2064
cols = 3088
f = np.fromfile(fd, dtype=np.uint16,count=rows*cols)
imS = f.reshape((rows, cols)) #notice row, column format
#print(im.shape)
submatrixS = imS[250:900, 1300:1800]
meanS = submatrixS.mean()
#print("Created Submatrix:\n",submatrix,"\n")

print(meanS)
# led.off()
fd.close()


#plt.imshow(imS, cmap='gray', vmin=0, vmax=4096)
#plt.show()