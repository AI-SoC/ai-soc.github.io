#include <stdio.h>


typedef struct data{

	char name[30];
	float rdata;

}DATA;

typedef struct node{

	DATA * data;
	struct node *next;

}NODE;


typedef struct chart{

	float hole;	
	int width;
	int height;
	char title[100];
	char subtitle[100];
	char entire_data_name[30];	
	char refer_name[30];		
	int data_num;
	NODE * front;
	NODE * rear;
}CHART;

NODE * data_table[10];

CHART * create_chart(float hole, int width, int height, char title[], char subtitle[], char entire_data_name[], char refer_name[]){

	CHART *chart = (CHART*)malloc(sizeof(CHART));
	
	if(!chart)
		return NULL;
	
	chart->hole = hole;
	chart->width = width;
	chart->height = height;
	
	sprintf(chart->title,title);
	sprintf(chart->subtitle,subtitle);
	sprintf(chart->refer_name,refer_name);
	sprintf(chart->entire_data_name,entire_data_name);
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

DATA * set_data(char *name, float data){

	DATA * new_data = (DATA*)malloc(sizeof(DATA));
	if(!new_data)
		return NULL;

	sprintf(new_data->name,name);
	new_data->rdata = data;
	
	return new_data;
}


int main(){

	/*	set bar chart type	*/
	
	CHART *chart = create_chart(0.4,900, 500,"My Daily Activity plans","It's fun to make the plans","Task","Hours per Day");

	/*	set data	*/

	char data_name[][30] = {"Work","Eat","Commute","Watch TV","Sleep"};

	float data_val[] = {11,2,2,2,7};

	int i;
	for( i = 0 ;  i < sizeof(data_name)/30  ; i++){
		DATA * data0 = set_data(data_name[i],data_val[i]);
		add_data(chart, data0);	
	}
	printf("<html>\n");
	printf("  <head>\n");
	printf("     <script type=\"text/javascript\" src=\"https://www.gstatic.com/charts/loader.js\"></script>\n");
	printf("     <script type=\"text/javascript\">\n");
	printf("      google.charts.load(\"current\", {packages:[\"corechart\"]});\n");
	printf("      google.charts.setOnLoadCallback(drawChart);\n");
	printf("      function drawChart() {\n");
	printf("        var data = google.visualization.arrayToDataTable([\n");
	printf("          ['%s', '%s'],\n",chart->entire_data_name, chart->refer_name);
	printf("          ['%s',     %.0f],\n", data_table[0]->data->name, data_table[0]->data->rdata);
	printf("          ['%s',      %.0f],\n", data_table[1]->data->name, data_table[1]->data->rdata);
	printf("          ['%s',  %.0f],\n", data_table[2]->data->name, data_table[2]->data->rdata);
	printf("          ['%s', %.0f],\n", data_table[3]->data->name, data_table[3]->data->rdata);
	printf("          ['%s',    %.0f]\n", data_table[4]->data->name, data_table[4]->data->rdata);
	printf("        ]);\n");
	printf("\n");
	printf("        var options = {\n");
	printf("          title: '%s',\n", chart->title);
	printf("          pieHole: %.1f,\n",chart->hole);
	printf("        };\n");
	printf("\n");
	printf("        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));\n");
	printf("        chart.draw(data, options);\n");
	printf("      }\n");
	printf("    </script>\n");
	printf("  </head>\n");
	printf("  <body>\n");
	printf("    <div id=\"donutchart\" style=\"width: %dpx; height: %dpx;\"></div>\n", chart->width, chart->height);
	printf("  </body>\n");
	printf("</html>\n");
		
	return 0;
}


