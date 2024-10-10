echo off
set PATH=C:\MinGW\mingw64\bin;%PATH%
rem echo %PATH%
rem cd "C:\MinGW\mingw64\bin"
prompt $g

rem "C:\WINDOWS\system32\cmd.exe" /k "compile\compile.bat"
rem "2024 2월에 makefile기반으로 이전"
"C:\WINDOWS\system32\cmd.exe" /k "make all"

