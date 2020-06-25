CC = gcc
OBJS = Barchart.o
TARGET = BarChart.exe
HTML = BarChart.html

.SUFFIXES : .c .o

all: $(TARGET)

$(TARGET): $(OBJS)
	$(CC) -o $@ $(OBJS)

run:
	$(TARGET) > $(HTML)
	chrome.exe $(HTML)

clean:
	rm -f $(HTML) $(TARGET) $(OBJS)
