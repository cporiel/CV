# Mon application CV
# guide d’utilisation



Cette application a été développée sous Linux  en NativeScript et angular. Elle a été testée seulement sur les appareils suivants :

| Nom           	| Type 			| Sytème 	| Version OS 	| Définition 		|
| --------------------- | --------------------- | ------------- | ------------- | --------------------- |
|   Nexus5 (Google)	| Machine virtuelle  	| Android 	| 7.1.1		| Full HD (1080x1080) 	|
| G2 D802 (LG)  	| Smartphone	  	| Android 	| 5.0.2		| Full HD (1080x1080) 	|

Le rendu n’est donc pas garanti dans des conditions différentes.

## Installation de NativeScript CLI et autres programmes nécessaires :

Avant de lancer l’application il est nécessaire d’installer une série de programmes. Pour cela vous pouvez suivre ce tutoriel : 

```

https://docs.nativescript.org/angular/start/quick-setup
```

Il est nécessaire de  suivre le « full setup » et de ne pas se limiter au « quick setup » si vous souhaitez faire fonctionner l’application sur une machine virtuelle android sur ordinateur.

### Résumé :

* installez Node.js : 

```
				
https://nodejs.org/en/
```

* installez ces bibliothèques :

```

sudo apt-get install lib32z1 lib32ncurses5 lib32bz2-1.0 libstdc++6:i386
```


*installez G++ compiler :
```

sudo apt-get install g++
```

* installez JDK :

```

sudo apt-get install python-software-properties
add-apt-repository ppa:webupd8team/java
apt-get update
apt-get install oracle-java8-installer
```

* Créez/modifiez la variable d’environnement JAVA_HOME

```

export JAVA_HOME=$(update-alternatives --query javac | sed -n -e 's/Best: *\(.*\)\/bin\/javac/\1/p')
```


* installez SDK tools à partir de :

```
	
https://developer.android.com/studio/#Other
```

* ouvrez le fichier contenant les variables d’environnement et ajoutez « ANDROID_HOME=X » avec X le chemin vers le dossier android/sdk créé lors de l’installation de SDK.

```

sudo nano /etc/environment
```
* installez une série de packages nécessaires au bon fonctionnement de SDK :

```

sudo $ANDROID_HOME/tools/bin/sdkmanager "tools" "emulator" "platform-tools" "platforms;android-28" "build-tools;28.0.3" "extras;android;m2repository" "extras;google;m2repository"
```

* installez NativeScript Command Line Interface :

```

sudo npm install nativescript -g --unsafe-perm
```

* Enfin tapez cette commande afin d’avoir une vue d’ensemble sur l’installation,

```
tns doctor
```

vous devriez obtenir quelque chose ressemblant à ça :

```
✔ Getting environment information 

No issues were detected.
✔ Your ANDROID_HOME environment variable is set and points to correct directory.
✔ Your adb from the Android SDK is correctly installed.
✔ The Android SDK is installed.
✔ A compatible Android SDK for compilation is found.
✔ Javac is installed and is configured properly.
✔ The Java Development Kit (JDK) is installed and is configured properly.
✔ Local builds for iOS can be executed only on a macOS system. To build for iOS on a different operating system, you can use the NativeScript cloud infrastructure.
✔ Getting NativeScript components versions information...
✔ Component nativescript has 5.0.2 version and is up to date.
✔ Component tns-core-modules has 5.0.5 version and is up to date.
✔ Component tns-android has 5.0.0 version and is up to date.
✔ Component tns-ios has 5.0.0 version and is up to date.
```

Si c’est le cas, félicitation, votre système est bien configuré.
Assurez-vous d’avoir installer une machine virtuelle correspondant aux critères présentés en introduction. L’AVD Nexus5 peut très facilement être téléchargée à partir d’Android Studio.


## Lancer et utiliser l’application :

* Pour lancer l’application, aller dans le répertoire racine de l’application et tapez la commande :

```

tns run android
```

* Appuyez sur les 3 petits carrés en haut à gauche pour ouvrir le menu, de là vous pourrez naviguer entre les différentes sections du CV.

* Sur les sections Formation, Expériences et Projets, balayez vers la gauche pour remonter dans le temps.
