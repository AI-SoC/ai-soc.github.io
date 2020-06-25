CC = gcc
OBJS = Donutchart.o
TARGET = Donutchart.exe
HTML = Donutchart.html

.SUFFIXES : .c .o

all: $(TARGET)

$(TARGET): $(OBJS)
	$(CC) -o $@ $(OBJS)

run:
	$(TARGET) > $(HTML)
	chrome.exe $(HTML)

clean:
	rm -f $(HTML) $(TARGET) $(OBJS)
