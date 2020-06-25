#include <stdio.h>


typedef struct data{

	char name[30];
	float rdata[10];

}DATA;

typedef struct node{

	DATA * data;
	struct node *next;

}NODE;


typedef struct chart{
	
	int width;
	int height;
	char title[100];
	char subtitle[100];
	char entire_data_name[30];	
	char refer_name[10][20];
	int data_num;
	char type[20];
	NODE * front;
	NODE * rear;
}CHART;

NODE * data_table[10];

CHART * create_chart(char type[], int width, int height, char title[], char subtitle[], char entire_data_name[], char (*refer_name)[20], int size){

	CHART *chart = (CHART*)malloc(sizeof(CHART));
	
	if(!chart)
		return NULL;
	
	sprintf(chart->type,type);
	chart->width = width;
	chart->height = height;
	
	sprintf(chart->title,title);
	sprintf(chart->subtitle,subtitle);
	sprintf(chart->entire_data_name,entire_data_name);

	int i;	
	for( i = 0 ; i < size/sizeof(*refer_name) ; i++){
		sprintf(chart->refer_name[i], refer_name+i);
	}
	chart->data_num = 0;
	chart->front = NULL;
	chart->rear = NULL;

	return chart;
}

int add_data(CHART * chart, DATA * data){

	if(!chart)
		return -1;

	NODE * new = (NODE*)malloc(sizeof(NODE));
	
	if(!new)
		return -1;

	new->next = NULL;
	new->data = data;

	if(!chart->data_num){
		chart->front = new;
		chart->rear = new;
		data_table[chart->data_num] = new;		
		chart->data_num++;
		return 1;
	}

	else{
		chart->rear->next = new;
		chart->rear = new;
		data_table[chart->data_num] = new;				
		chart->data_num++;
		return 1;
	}

}

DATA * set_data(char *name, float *data, int size){

	DATA * new_data = (DATA*)malloc(sizeof(DATA));
	if(!new_data)
		return NULL;

	sprintf(new_data->name,name);

	int i;
	for(i = 0 ; i < size ; i++){
		new_data->rdata[i] = data[i];
	}
	return new_data;
}


int main(){

	/*	set bar chart type	*/
	char refer_name[][20] = {"Distance","Brightness"};
	CHART *chart = create_chart("horizontal",900, 500,"Nearby galaxiex","distance on the left, brightness on the right","Galaxy",refer_name,sizeof(refer_name));

	/*	set data	*/

	char data_name[][30] = {"Canis Major Dwarf","Sagittarius Dwarf","Ursa Major II Dwarf","Lg. Magellanic Cloud","Bootes I"};

	float data_val[][10] = { 
		
			{8000, 23.3, },
			{24000, 4.5, },
			{30000, 14.3, },
			{50000, 0.9, },
			{60000, 13.1, }
	};

	int i;
	for( i = 0 ;  i < sizeof(data_name)/30  ; i++){
		DATA * data0 = set_data(data_name[i],data_val[i], sizeof(refer_name)/20);
		add_data(chart, data0);	
	}


	printf("<html>\n");
	printf("  <head>\n");
	printf("    <script type=\"text/javascript\" src=\"https://www.gstatic.com/charts/loader.js\"></script>\n");
	printf("    <script type=\"text/javascript\">\n");
	printf("      google.charts.load('current', {'packages':['bar']});\n");
	printf("      google.charts.setOnLoadCallback(drawStuff);\n");
	printf("\n");
	printf("      function drawStuff() {\n");
	printf("        var data = new google.visualization.arrayToDataTable([\n");
	printf("          ['%s', '%s', '%s'],\n",chart->entire_data_name, chart->refer_name[0], chart->refer_name[1]);
	printf("          ['%s', %.0f, %.1f],\n", data_table[0]->data->name, data_table[0]->data->rdata[0], data_table[0]->data->rdata[1]);
	printf("          ['%s', %.0f, %.1f],\n", data_table[1]->data->name, data_table[1]->data->rdata[0], data_table[1]->data->rdata[1]);
	printf("          ['%s', %.0f, %.1f],\n", data_table[2]->data->name, data_table[2]->data->rdata[0], data_table[2]->data->rdata[1]);
	printf("          ['%s', %.0f, %.1f],\n", data_table[3]->data->name, data_table[3]->data->rdata[0], data_table[3]->data->rdata[1]);
	printf("          ['%s', %.0f, %.1f]\n", data_table[4]->data->name, data_table[4]->data->rdata[0], data_table[4]->data->rdata[1]);
	printf("        ]);\n");


	printf("\n");
	printf("        var options = {\n");
	printf("          width: 800,\n");
	printf("          chart: {\n");
	printf("            title: '%s',\n", chart->title);
	printf("            subtitle: '%s'\n", chart->subtitle);
	printf("          },\n");
	printf("          bars: '%s', // Required for Material Bar Charts.\n",chart->type);
	printf("          series: {\n");
	printf("            0: { axis: '%s' }, // Bind series 0 to an axis named 'distance'.\n",chart->refer_name[0]);
	printf("            1: { axis: '%s' } // Bind series 1 to an axis named 'brightness'.\n",chart->refer_name[1]);
	printf("          },\n");
	printf("          axes: {\n");
	printf("            x: {\n");
	printf("              %s: {label: 'parsecs'}, // Bottom x-axis.\n", chart->refer_name[0]);
	printf("              %s: {side: 'top', label: 'apparent magnitude'} // Top x-axis.\n", chart->refer_name[1]);
	printf("            }\n");
	printf("          }\n");
	printf("        };\n");
	printf("\n");
	printf("      var chart = new google.charts.Bar(document.getElementById('dual_x_div'));\n");
	printf("      chart.draw(data, options);\n");
	printf("    };\n");
	printf("    </script>\n");
	printf("  </head>\n");
	printf("  <body>\n");
	printf("    <div id=\"dual_x_div\" style=\"width: %dpx; height: %dpx;\"></div>\n", chart->width, chart->height);
	printf("  </body>\n");
	printf("</html>\n");


	return 0;
}


