#!/bin/bash

# [span_4](start_span)إنشاء تقرير بتاريخ اليوم داخل مجلد notes[span_4](end_span)
TODAY=$(date +%Y-%m-%d)
REPORT="notes/report_$TODAY.txt"

echo "--- تقرير يومي ---" > $REPORT
echo "المستخدم: $(whoami)" >> $REPORT
echo "المسار: $(pwd)" >> $REPORT

# [span_7](start_span)حساب عدد الملفات داخل data/[span_7](end_span)
FILES_COUNT=$(ls data/ | wc -l)
echo "عدد الملفات في data هو: $FILES_COUNT" >> $REPORT

echo "تم تنفيذ التقرير بنجاح!"[span_8]