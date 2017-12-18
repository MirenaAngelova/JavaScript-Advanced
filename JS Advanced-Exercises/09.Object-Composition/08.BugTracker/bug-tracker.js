function getObject() {
    return (function() {
        let reports = {}
        let currentReportId = 0
        let outputSelector
        let sortingOrder = 'ID'

        function sortAndDisplay() {
            let arrayReports = []
            for (var key in reports) {
                if (reports.hasOwnProperty(key)) {
                    var report = reports[key];
                    arrayReports.unshift(report)
                }
            }

            if (sortingOrder === 'ID') {
                arrayReports = arrayReports.sort((a, b) => {
                    return a.ID - b.ID
                })
            } else if (sortingOrder === 'severity') {
                arrayReports = arrayReports.sort((a, b) => {
                    return a.severity > b.severity
                })
            } else if (sortingOrder === 'author') {
                arrayReports = arrayReports.sort((a, b) => {
                    return a.author > b.author
                })
            }

            let selectedSelector = $(outputSelector).empty()
            for (var index = 0; index < arrayReports.length; index++) {
                var report = arrayReports[index];
                selectedSelector.append(
                    $('<div>')
                    .addClass('report')
                    .attr('id', `report_${report.ID}`)
                    .append(
                        $('<div>')
                        .addClass('body')
                        .append(
                            $('<p>')
                            .text(`${report.description}`)
                        )
                    )
                    .append(
                        $('<div>')
                        .addClass('title')
                        .append(
                            $('<span>')
                            .addClass('author')
                            .text(`Submitted by: ${report.author}`)
                        )
                        .append(
                            $('<span>')
                            .addClass('status')
                            .text(`${report.status} | ${report.severity}`))
                    )
                )
            }
        }

        return {
            report: function(author, description, reproducible, severity) {
                reports[currentReportId] = {
                    ID: currentReportId,
                    author: author,
                    description: description,
                    reproducible: reproducible,
                    severity: severity,
                    status: 'Open'
                }

                currentReportId++
                sortAndDisplay()
            },
            setStatus: function(id, newStatus) {
                if (reports.hasOwnProperty(id)) {
                    reports[id].status = newStatus
                }
                sortAndDisplay()
            },
            remove: function(id) {
                if (reports.hasOwnProperty(id)) {
                    delete reports[id]
                }
                sortAndDisplay()
            },
            sort: function(method) {
                sortingOrder = method
                sortAndDisplay()
            },
            output: function(selector) {
                outputSelector = selector
            }
        }
    })()
}